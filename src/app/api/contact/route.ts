import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("=== CONTACT API CALLED ===");

    // Vérifier les variables d'environnement
    console.log("ENV CHECK:", {
      BREVO_API_KEY: !!process.env.BREVO_API_KEY,
      BREVO_SENDER_EMAIL: process.env.BREVO_SENDER_EMAIL,
      BREVO_RECEIVER_EMAIL: process.env.BREVO_RECEIVER_EMAIL,
    });

    if (
      !process.env.BREVO_API_KEY ||
      !process.env.BREVO_SENDER_EMAIL ||
      !process.env.BREVO_RECEIVER_EMAIL
    ) {
      return NextResponse.json(
        { error: "Variables d'environnement manquantes" },
        { status: 500 }
      );
    }

    // Parser le body proprement
    let body;
    try {
      body = await req.json();
    } catch (err) {
      console.error("JSON PARSE ERROR:", err);
      return NextResponse.json(
        { error: "Body invalide" },
        { status: 400 }
      );
    }

    const { name, email, subject, phone, message } = body;

    console.log("BODY RECEIVED:", body);

    if (!name || !email || !subject || !message || !phone) {
      return NextResponse.json(
        { error: "Tous les champs sont requis." },
        { status: 400 }
      );
    }

    // Appel Brevo
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: "Portfolio Contact",
          email: process.env.BREVO_SENDER_EMAIL,
        },
        to: [
          {
            email: process.env.BREVO_RECEIVER_EMAIL,
            name: "Samuel",
          },
        ],
        subject: `Nouveau message de ${name}`,
        htmlContent: `
          <h2>Nouveau message depuis ton portfolio</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Téléphone :</strong> ${phone}</p>
          <p><strong>Sujet :</strong> ${subject}</p>
          <p><strong>Message :</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    const result = await response.json();

    console.log("BREVO STATUS:", response.status);
    console.log("BREVO RESPONSE:", result);

    if (!response.ok) {
      return NextResponse.json(
        { error: "Brevo error", details: result },
        { status: response.status }
      );
    }

    console.log("EMAIL SENT SUCCESSFULLY");

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("UNEXPECTED ERROR:", error);

    return NextResponse.json(
      { error: "Erreur serveur interne." },
      { status: 500 }
    );
  }
}