"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

const Headerpopup = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  if (!isOpen) return null;

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setPhone(value);
      if (phoneError) setPhoneError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phone.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits.");
      return;
    }

    setPhoneError("");
    // TODO: handle actual submit (e.g., API call) here.
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white text-black p-5 rounded-xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-black text-xl cursor-pointer"
        >
          ×
        </button>

        <h2 className="text-xl font-semibold mb-4">
          {t("headerPopup.title")}
        </h2>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={t("headerPopup.namePlaceholder")}
            className="w-full border p-2 rounded text-sm"
          />
          <input
            type="email"
            placeholder={t("headerPopup.emailPlaceholder")}
            className="w-full border p-2 rounded text-sm"
          />
          <input
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            maxLength={10}
            inputMode="numeric"
            pattern="\d{10}"
            placeholder="Enter 10-digit phone number"
            className="w-full border p-2 rounded text-sm"
          />
          {phoneError && (
            <p className="text-xs text-red-500">{phoneError}</p>
          )}
          <textarea
            placeholder={t("headerPopup.messagePlaceholder")}
            className="w-full border p-2 rounded text-sm"
            rows="3"
          ></textarea>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="header-consent"
              required
              className="mt-1 h-4 w-4 cursor-pointer rounded border-gray-300 text-[#E94C37] focus:ring-[#E94C37]"
            />
            <label htmlFor="header-consent" className="text-xs text-slate-600">
              {t("headerPopup.consent")}
            </label>
          </div>

          <button
            type="submit"
            className="mx-auto block rounded-2xl bg-[#E94C37] px-6 py-3 cursor-pointer text-sm font-semibold text-white"
          >
            {t("headerPopup.submit")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Headerpopup;
