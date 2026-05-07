import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 relative overflow-hidden">

      {/* Decorative background blur */}
      <div className="absolute w-125 h-125 bg-green-100 rounded-full blur-3xl opacity-40 top-10 left-1/2 -translate-x-1/2" />

      <div className="text-center max-w-md relative z-10">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center animate-pulse">
            <CheckCircle className="text-green-600 w-12 h-12" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Message envoyé <span className="text-green-500">avec succès !</span>
        </h1>

        {/* Text */}
        <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
          Merci pour votre message. Je vous répondrai dans les plus brefs délais.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 bg-orange-500 hover:bg-black text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-black/30"
        >
          Retour à l’accueil
        </Link>

      </div>
    </section>
  );
}