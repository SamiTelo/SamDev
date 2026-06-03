"use client";

import { motion } from "framer-motion";
import React from "react";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Title } from "../../home/components/title";
import { useContactForm } from "../hooks/useContactForm";
import { Spinner } from "@/components/ui/spinner";
import { useTranslations } from "next-intl";

export const ContactSection = () => {
  const { formData, loading, responseMessage, handleChange, handleSubmit } =
    useContactForm();

  const t = useTranslations("contact");

  return (
    <section
      id="contact"
      className="pt-30 md:pt-48 pb-38 px-6 sm:px-10 relative overflow-hidden"
    >
      {/* TITLE */}
      <Title
        title={t("header.title")}
        heading={t("header.heading")}
        text={t("header.description")}
      />

      {/* MAIN GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-18 sm:gap-20 md:gap-12 items-start mt-32">
        {/* LEFT */}
        <motion.div
          initial={{ x: -50, opacity: 0, scale: 0.95 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            duration: 1.5,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="lg:col-span-4 space-y-6"
        >
          {/* ADDRESS */}
          <div className="flex items-center gap-5">
            <div className="bg-orange-100 p-7 rounded-sm">
              <MapPin className="text-orange-600 w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-1">
                {t("info.address.label")}
              </h4>
              <p className="text-gray-500">{t("info.address.value")}</p>
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex items-center gap-5">
            <div className="bg-green-100 p-7 rounded-sm">
              <Mail className="text-green-600 w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-1">
                {t("info.email.label")}
              </h4>
              <p className="text-gray-500">{t("info.email.value")}</p>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex items-center gap-5">
            <div className="bg-purple-100 p-7 rounded-sm">
              <Phone className="text-purple-600 w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-1">
                {t("info.phone.label")}
              </h4>
              <p className="text-gray-500">{t("info.phone.value")}</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            duration: 1.5,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="lg:col-span-8 px-0 md:pl-16 pb-8"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder={t("form.name")}
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-5 bg-[#F6F9FC] border-none rounded-xl focus:ring-2 focus:ring-gray-400 outline-none transition-all"
              />

              <input
                type="email"
                name="email"
                placeholder={t("form.email")}
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
                placeholder={t("form.subject")}
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-5 bg-[#F6F9FC] border-none rounded-xl focus:ring-2 focus:ring-gray-400 outline-none transition-all"
              />

              <input
                type="tel"
                name="phone"
                placeholder={t("form.phone")}
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-5 bg-[#F6F9FC] border-none rounded-xl focus:ring-2 focus:ring-gray-400 outline-none transition-all"
              />
            </div>

            <textarea
              name="message"
              placeholder={t("form.message")}
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-6 pb-20 bg-[#F6F9FC] border-none rounded-xl focus:ring-2 focus:ring-gray-400 outline-none transition-all resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 mt-4 text-white md:text-[16px] text-sm py-4 px-14 rounded-full bg-[#FF5722] hover:bg-black transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-200 hover:shadow-black/50 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Spinner />
                  {t("form.buttonLoading")}
                </>
              ) : (
                <>
                  {t("form.buttonIdle")}
                  <ArrowUpRight size={20} />
                </>
              )}
            </button>

            {responseMessage && (
              <p className="text-center text-sm mt-3">{responseMessage}</p>
            )}
          </form>
        </motion.div>
      </div>

      {/* IMAGE */}
      <div className="absolute -8 bottom-0 md:-bottom-30 right-0 pointer-events-none">
        <Image
          src="/assets/contact-bg.svg"
          alt="contact"
          width={600}
          height={600}
          className="w-45 sm:w-50 md:w-50 md:h-125 h-50 animate-pulse"
        />
      </div>
    </section>
  );
};
