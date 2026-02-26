"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../../i18n/i18n";

const WhatsappButton = () => {
    const { t } = useTranslation();
    const phoneNumber = "966537750884";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="group fixed bottom-6 left-6 z-[999] flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#22c35e] transition-colors"
            aria-label="Chat on WhatsApp"
        >
            {/* Pulsing effect */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40"></span>

            {/* WhatsApp Icon */}
            <FaWhatsapp className="relative h-6 w-6 z-10" />

            {/* Tooltip for Desktop */}
            <span className="absolute left-16 scale-0 group-hover:scale-100 whitespace-nowrap rounded-xl bg-white px-4 py-2 text-sm font-bold text-[#0d1b3f] shadow-2xl transition-all duration-200 ease-out md:block hidden pointer-events-none border border-slate-100">
                {t("whatsapp.label")}
                {/* Tiny arrow */}
                <span className="absolute -left-1 top-1/2 -translate-y-1/2 h-2 w-2 rotate-45 bg-white border-b border-l border-slate-100"></span>
            </span>
        </motion.a>
    );
};

export default WhatsappButton;
