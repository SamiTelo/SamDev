"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ContactFormData } from "../types/contact";

export const useContactForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        resetForm();

        // REDIRECTION SUCCESS
        router.push("/success");
        return;
      }

      const data = await res.json();
      setResponseMessage(data.error || "Une erreur est survenue.");

    } catch {
      setResponseMessage("Erreur réseau.");
    }

    setLoading(false);
  };

  return {
    formData,
    loading,
    responseMessage,
    handleChange,
    handleSubmit,
  };
};