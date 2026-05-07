import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, subject, phone, message } = body;

    if ( !name || !email || !subject || !message || !phone ) {
      return NextResponse.json(
        { error: "Tous les champs sont requis." },
        { status: 400 },
      );
    }

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY!,
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
        <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
        `,
      }),
    });

    if (!response.ok) {
      throw new Error("Erreur Brevo");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message." },
      { status: 500 },
    );
  }
}
