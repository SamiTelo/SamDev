"use client";

import React from "react";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Title } from "../home/components/title";
import { useContactForm } from "./hooks/useContactForm";
import { Spinner } from "@/components/ui/spinner";

export const ContactSection = () => {
  const { formData, loading, responseMessage, handleChange, handleSubmit } =
    useContactForm();

  return (
    <section
      id="contact"
      className="pt-30 md:pt-48 pb-38 px-6 sm:px-10 relative overflow-hidden"
    >
      {/* Title */}
      <Title
        title="Contactez- Moi"
        heading="Donnez Vie à Vos Idées"
        text={
          <>
            Besoin d&apos;un développeur passionné, créatif et rigoureux pour
            donner un nouvel élan à vos projets et transformer vos idées en
            solutions performantes ?
            <br />
            N&apos;hésitez pas à me joindre !
          </>
        }
      />

      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-18 sm:gap-20 md:gap-12 items-start mt-32">
        {/* LEFT SIDE */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center gap-5">
            <div className="bg-orange-100 p-7 rounded-sm">
              <MapPin className="text-orange-600 w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-1">Address</h4>
              <p className="text-gray-500">Abidjan, Côte d’ivoire</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="bg-green-100 p-7 rounded-sm">
              <Mail className="text-green-600 w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-1">Email</h4>
              <p className="text-gray-500">samueltiemtore10@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="bg-purple-100 p-7 rounded-sm">
              <Phone className="text-purple-600 w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-1">Mobile</h4>
              <p className="text-gray-500">+225 05 96 08 56 43</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="lg:col-span-8 px-0 md:pl-16 pb-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Votre Nom *"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-5 bg-[#F6F9FC] border-none rounded-xl focus:ring-2 focus:ring-gray-400 outline-none transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Adresse E-mail *"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-5 bg-[#F6F9FC] border-none rounded-xl focus:ring-2 focus:ring-gray-400 outline-none transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="subject"
                placeholder="Sujets *"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-5 bg-[#F6F9FC] border-none rounded-xl focus:ring-2 focus:ring-gray-400 outline-none transition-all"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Mobile *"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-5 bg-[#F6F9FC] border-none rounded-xl focus:ring-2 focus:ring-gray-400 outline-none transition-all"
              />
            </div>

            <textarea
              name="message"
              placeholder="Message *"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-6 pb-20 bg-[#F6F9FC] border-none rounded-xl focus:ring-2 focus:ring-gray-400 outline-none transition-all resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 mt-3 text-white md:text-[16px] text-sm py-4 px-14 rounded-full bg-[#FF5722] hover:bg-black transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-200 hover:shadow-black/50 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Spinner />
                  Envoi...
                </>
              ) : (
                <>
                  Envoyer
                  <ArrowUpRight size={20} />
                </>
              )}
            </button>

            {responseMessage && (
              <p className="text-center text-sm mt-3">{responseMessage}</p>
            )}
          </form>
        </div>
      </div>

      {/* Decorative Image */}
      <div className="absolute -8 bottom-0 md:-bottom-30 right-0 pointer-events-none">
        <Image
          src="/assets/contact-bg.svg"
          alt=""
          width={600}
          height={600}
          className="w-45 sm:w-50 md:w-50 md:h-125 h-50 animate-pulse"
        />
      </div>
    </section>
  );
};
