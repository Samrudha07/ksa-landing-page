
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ChooseTheBest from "./components/services";
import About from "./components/about";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Headerpopup from "./components/Headerpopup";
import "./../i18n/i18n";
import { useTranslation } from "react-i18next";

const services = [
  {
    title: "Assistance in Company Formation (MISA / CR / RHQ)",
    summary:
      "Expert guidance to launch seamlessly in KSA with complete support for regulatory approvals.",
    items: [
      "Step-by-step support for MISA, Commercial Registration, and RHQ approvals",
      "Compliance-first approach to meet every local requirement",
      "Risk-free setup so you can focus on strategy from day one",
    ],
  },
  {
    title: "VAT Compliance Support",
    summary:
      "Keep VAT processes accurate, timely, and audit-ready with specialists on your side.",
    items: [
      "Full coverage for VAT registration, filing, and reporting",
      "Advisory services to optimize processes and ensure accuracy",
      "Proactive monitoring that minimizes penalties and cash-flow impact",
    ],
  },
  {
    title: "Withholding Tax (WHT) Advisory Support",
    summary:
      "Navigate WHT obligations confidently with practical, compliant solutions.",
    items: [
      "Interpretation of KSA WHT regulations aligned to your business model",
      "Accurate calculation, reporting, and submission support",
      "Controls to mitigate exposure and maintain regulator trust",
    ],
  },
  {
    title: "Tax Assistance",
    summary:
      "Comprehensive tax guidance across corporate, income, and indirect taxes.",
    items: [
      "End-to-end support from planning through ongoing filings",
      "Strategies that optimize liabilities without compromising compliance",
      "Clarity on complex tax matters to unlock growth",
    ],
  },
  {
    title: "Audit Support Services",
    summary:
      "Stay ready for statutory and internal audits with dedicated liaison support.",
    items: [
      "Audit readiness planning and execution assistance",
      "Coordination with auditors for a smooth, timely close",
      "Controls that strengthen accuracy, compliance, and risk management",
    ],
  },
  {
    title: "Ultimate Beneficial Ownership Advisory",
    summary:
      "Ensure transparent ownership disclosures that satisfy every KSA obligation.",
    items: [
      "Guidance on UBO identification and documentation",
      "Practical frameworks to maintain ongoing compliance",
      "Efficient processes tailored to your corporate structure",
    ],
  },
];

const navLinks = [
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "contact", href: "#contact" },
];

export default function Home() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false); 

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);


  useEffect(() => {
    const lang = i18n.language || "en";
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }
  }, [i18n.language]);

  const handleLanguageSelect = (lang: "en" | "ar") => {
    i18n.changeLanguage(lang);
    setIsLangOpen(false);
  };
  return (
    <main className="min-h-screen bg-[#f6f9ff] text-[#0d1b3f]">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="text-lg font-semibold text-[#0d1b3f]">
            Mac & Ross
          </a>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-[#E94C37]">
                {t(`nav.${link.key}`)}
              </a>
            ))}

            {/* Language Button (Desktop - open on hover) */}
            <div
              className="relative"
              onMouseEnter={() => setIsLangOpen(true)}
              onMouseLeave={() => setIsLangOpen(false)}
            >
              <button
                className="inline-flex items-center justify-center rounded-lg bg-[#E94C37] px-4 py-2 text-white hover:bg-[#ff755c] cursor-pointer"
              >
                {t("nav.language")}
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 rounded-lg border border-slate-200 bg-white shadow-lg">
                  <button
                    className="w-full px-4 py-2 text-left hover:bg-[#f0f0f0]"
                    onClick={() => handleLanguageSelect("en")}
                  >
                    English
                  </button>
                  <button
                    className="w-full px-4 py-2 text-left hover:bg-[#f0f0f0]"
                    onClick={() => handleLanguageSelect("ar")}
                  >
                    Arabic
                  </button>
                </div>
              )}
            </div>

            {/* Popup Button */}
            <button
              onClick={() => setIsPopupOpen(true)}
              className="inline-flex items-center justify-center rounded-lg bg-[#E94C37] px-4 py-2 text-white hover:bg-[#ff755c] cursor-pointer"
            >
              Work With Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="rounded-full border border-slate-300 p-2 text-[#0d1b3f] transition hover:border-[#E94C37] md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.6}
              className="h-5 w-5"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path
                  d="M3.75 7.5h16.5M3.75 12h16.5m-16.5 4.5h16.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="bg-white px-6 py-4 md:hidden shadow-lg">
            <div className="flex flex-col gap-3 text-sm text-slate-700">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    setIsMenuOpen(false);
                    const el = document.querySelector(link.href) as HTMLElement | null;
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full text-left px-1 py-2 font-medium text-[#0d1b3f] hover:text-[#E94C37] transition-colors"
                >
                  {t(`nav.${link.key}`)}
                </button>
              ))}

              {/* Language Button Mobile */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen((prev) => !prev)}
                  className="inline-flex items-center justify-center rounded-2xl bg-[#E94C37] px-4 py-3 text-center font-semibold text-white shadow-lg hover:-translate-y-0.5 hover:bg-[#ff755c] w-full"
                >
                  {t("nav.language")}
                </button>

                {isLangOpen && (
                  <div className="mt-2 w-full rounded-lg border border-slate-200 bg-white shadow-lg">
                    <button
                      className="w-full px-4 py-2 text-left hover:bg-[#f0f0f0]"
                      onClick={() => handleLanguageSelect("en")}
                    >
                      English
                    </button>
                    <button
                      className="w-full px-4 py-2 text-left hover:bg-[#f0f0f0]"
                      onClick={() => handleLanguageSelect("ar")}
                    >
                      Arabic
                    </button>
                  </div>
                )}
              </div>

              {/* Work With Us Mobile */}
              <button
                onClick={() => {
                  setIsPopupOpen(true);
                  setIsMenuOpen(false);
                }}
                className="inline-flex items-center justify-center rounded-2xl bg-[#E94C37] px-4 py-3 text-center font-semibold text-white shadow-lg hover:-translate-y-0.5 hover:bg-[#ff755c] w-full"
              >
                {t("workWithUs.title")}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* <header className="relative isolate overflow-hidden bg-gradient-to-br from-[#2b2b2b] via-[#151515] to-[#050505] px-6 py-24 text-center text-white sm:py-32 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E94C37]/40 px-4 py-1 text-xs uppercase tracking-[0.2em] text-[#E94C37]">
            {t("hero.tag")}
          </span>

          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {t("hero.title")}
          </h1>

          <p className="mt-4 text-lg text-gray-300 sm:text-xl">
            {t("hero.subtitle")}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-base text-gray-200">
            <div className="rounded-full border border-white/10 px-4 py-2">70+ professionals</div>
            <div className="rounded-full border border-white/10 px-4 py-2">GCC-wide coverage</div>
            <div className="rounded-full border border-white/10 px-4 py-2">Strategic financial solutions</div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
          <div className="absolute inset-y-10 inset-x-1/4 rounded-full bg-[#E94C37] blur-[160px]" />
        </div>
      </header> */}
      <header className="relative isolate overflow-hidden bg-gradient-to-br from-[#2b2b2b] via-[#151515] to-[#050505] px-6 py-24 text-center text-white sm:py-32 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E94C37]/40 px-4 py-1 text-xs uppercase tracking-[0.2em] text-[#E94C37]">
            {t("hero.tag")}
          </span>

          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {t("hero.title")}
          </h1>

          <p className="mt-4 text-lg text-gray-300 sm:text-xl">
            {t("hero.subtitle")}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-base text-gray-200">
            <div className="rounded-full border border-white/10 px-4 py-2">
              {t("hero.badge1")}
            </div>
            <div className="rounded-full border border-white/10 px-4 py-2">
              {t("hero.badge2")}
            </div>
            <div className="rounded-full border border-white/10 px-4 py-2">
              {t("hero.badge3")}
            </div>
          </div>

          {/* ⭐ ONLY BUTTON ADDED — NO STYLES CHANGED */}
          <button
            onClick={openPopup}
            className="mt-8 rounded-xl bg-[white] px-6 py-3 text-[#E94C37] cursor-pointer font-semibold shadow-lg hover:bg-[#E94C37] hover:text-[white] transition"
          >
            {t("hero.contactButton")}
          </button>
        </div>

        <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
          <div className="absolute inset-y-10 inset-x-1/4 rounded-full bg-[#E94C37] blur-[160px]" />
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="w-full bg-white px-6 py-4 lg:px-8">
        <About onOpenPopup={openPopup} />
      </section>

      {/* Services Section */}
      <section id="services" className="w-full bg-gray-100 px-6 py-10 lg:px-8">
        <ChooseTheBest onOpenPopup={openPopup} />
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full bg-white px-6 py-10 lg:px-8">
        <div className="mx-auto w-full max-w-8xl rounded-2xl bg-white p-8 lg:p-16 flex flex-col">

          <div className="grid gap-12 lg:grid-cols-2 items-start">

            {/* LEFT SIDE WITH ANIMATION */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6 lg:pr-12"
            >
              <div className="flex items-center space-x-2 mb-8 text-center justify-start">
                <div className="w-1 h-6 bg-[#E94C37]"></div>
                <span className="text-[#E94C37] text-xl font-extrabold uppercase tracking-wider">
                  {t("contact.tag")}
                </span>
              </div>

              <h2 className="text-4xl font-semibold leading-snug text-[#0d1b3f]">
                {t("contact.titleLine1")} <br /> {t("contact.titleLine2")}
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                {t("contact.description")}
              </p>

              {/* ICON LIST WITH STAGGER */}
              <motion.div
                className="space-y-3 text-xl font-bold text-slate-700 pt-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2 },
                  },
                }}
              >
                {[
                  { icon: <FaLocationDot />, text: t("contact.location") },
                  { icon: <MdEmail />, text: t("contact.email") },
                  { icon: <FaPhoneAlt />, text: t("contact.phone") },
                ].map((item, index) => (
                  <motion.p
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="flex items-center gap-2"
                  >
                    {item.icon} <span>{item.text}</span>
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>

            {/* FORM WITH ANIMATION */}
            <motion.form
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full space-y-5 p-6 border border-red-300 rounded-2xl"
            >
              <div className="space-y-2">
                <label className="text-sm font-medium">{t("contact.fullName")}</label>
                <input
                  type="text"
                  placeholder={t("contact.fullNamePlaceholder")}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-[#E94C37] focus:ring-2 focus:ring-[#E94C37]/30"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">{t("contact.workEmail")}</label>
                <input
                  type="email"
                  placeholder={t("contact.workEmailPlaceholder")}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-[#E94C37] focus:ring-2 focus:ring-[#E94C37]/30"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">{t("contact.company")}</label>
                <input
                  type="text"
                  placeholder={t("contact.companyPlaceholder")}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-[#E94C37] focus:ring-2 focus:ring-[#E94C37]/30"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">{t("contact.help")}</label>
                <textarea
                  rows={4}
                  placeholder={t("contact.helpPlaceholder")}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-[#E94C37] focus:ring-2 focus:ring-[#E94C37]/30"
                />
              </div>

              {/* BUTTON ANIMATION */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="mx-auto block rounded-2xl bg-[#E94C37] px-6 py-3 text-sm font-semibold text-white"
              >
                {t("contact.submit")}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
      {/* Header Contact Popup (global) */}
      <Headerpopup isOpen={isOpen} onClose={closePopup} />
      {/* Popup Modal */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50  p-4"
          onClick={() => setIsPopupOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-4 top-4 text-xl cursor-pointer font-bold text-gray-500 hover:text-gray-700"
              onClick={() => setIsPopupOpen(false)}
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold text-[#0d1b3f] mb-4">
              {t("workWithUs.title")}
            </h2>

            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium">{t("contact.fullName")}</label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-[#E94C37]"
                />
              </div>

              <div>
                <label className="text-sm font-medium">{t("contact.workEmail")}</label>
                <input
                  type="email"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-[#E94C37]"
                />
              </div>

              <div>
                <label className="text-sm font-medium">{t("contact.company")}</label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-[#E94C37]"
                />
              </div>

              <div>
                <label className="text-sm font-medium">{t("workWithUs.messageLabel")}</label>
                <textarea
                  rows={4}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-[#E94C37]"
                />
              </div>

              <button
                type="submit"
                className="mx-auto block cursor-pointer rounded-2xl bg-[#E94C37] px-6 py-3 text-sm font-semibold text-white"
              >
                {t("workWithUs.submit")}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-[#0b1d3a] px-6 py-10 text-center text-sm text-white/80">
        <p>
          © {new Date().getFullYear()} Mac & Ross Management Company.{" "}
          {t("footer.rights")}
        </p>
      </footer>
    </main>
  );
}

