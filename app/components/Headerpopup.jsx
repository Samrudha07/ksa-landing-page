"use client";

import { useTranslation } from "react-i18next";

const Headerpopup = ({ isOpen, onClose }) => {
    const { t } = useTranslation();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center">
            <div className="bg-white text-black p-6 rounded-xl w-full max-w-md relative">

                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-black text-xl cursor-pointer"
                >
                    ×
                </button>

                <h2 className="text-xl font-semibold mb-4">
                    {t("headerPopup.title")}
                </h2>

                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder={t("headerPopup.namePlaceholder")}
                        className="w-full border p-3 rounded"
                    />
                    <input
                        type="email"
                        placeholder={t("headerPopup.emailPlaceholder")}
                        className="w-full border p-3 rounded"
                    />
                    <textarea
                        placeholder={t("headerPopup.messagePlaceholder")}
                        className="w-full border p-3 rounded"
                        rows="4"
                    ></textarea>

                    <button className="mx-auto block rounded-2xl bg-[#E94C37] px-6 py-3 cursor-pointer text-sm font-semibold text-white">
                        {t("headerPopup.submit")}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Headerpopup;
