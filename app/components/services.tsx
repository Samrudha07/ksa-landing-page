"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { jost } from "@/app/fonts";
import { useTranslation } from "react-i18next";

interface ServiceCard {
    id: number;
    titleKey: string;
    descriptionKey: string;
    highlightsKeys?: string[];
    icon: string;
    progress?: string;
}

const getRandomImageUrl = (seed: number) =>
    `https://picsum.photos/seed/ksa-service-${seed}/1200/900`;

const services: ServiceCard[] = [
    {
        id: 1,
        titleKey: "services.1.title",
        descriptionKey: "services.1.description",
        icon: "square",
    },
    {
        id: 2,
        titleKey: "services.2.title",
        descriptionKey: "services.2.description",
        icon: "circle",
    },
    {
        id: 3,
        titleKey: "services.3.title",
        descriptionKey: "services.3.description",
        icon: "triangle",
    },
    {
        id: 4,
        titleKey: "services.4.title",
        descriptionKey: "services.4.description",
        icon: "hexagon",
    },
    {
        id: 5,
        titleKey: "services.5.title",
        descriptionKey: "services.5.description",
        icon: "square",
    },
    {
        id: 6,
        titleKey: "services.6.title",
        descriptionKey: "services.6.description",
        icon: "circle",
    },
];

interface ChooseTheBestProps {
    onOpenPopup?: () => void;
}

const ChooseTheBest = ({ onOpenPopup }: ChooseTheBestProps) => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            const container = scrollContainerRef.current;
            if (!container) return;

            const scrollMidpoint = container.scrollTop + container.clientHeight / 2;

            let currentIndex = 0;
            cardRefs.current.forEach((card, index) => {
                if (!card) return;
                if (scrollMidpoint >= card.offsetTop) {
                    currentIndex = index;
                }
            });

            setActiveIndex(currentIndex);
        };

        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
            return () => container.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const scrollToService = (index: number) => {
        const container = scrollContainerRef.current;
        const targetCard = cardRefs.current[index];
        if (!container || !targetCard) return;

        container.scrollTo({
            top: targetCard.offsetTop,
            behavior: "smooth",
        });
    };

    return (
        <div className={` bg-gray-100 ${jost.className}`}>
            <div className="flex flex-col lg:flex-row w-full max-w-8xl mx-auto">
                {/* Left Column - Static Content */}
                <div className="lg:w-1/3 bg-gray-100 p-8 lg:p-16 flex flex-col justify-center relative overflow-hidden">
                    {/* Background Pattern */}

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative z-10"
                    >
                        {/* Small Label */}
                        <div className="flex items-center space-x-2 mb-8 text-center justify-start">
                            <div className="w-1 h-6 bg-[#E94C37]"></div>
                            <span className="text-[#E94C37] text-xl font-extrabold uppercase tracking-wider">
                                {t("servicesSection.label")}
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight text-start">
                            {t("servicesSection.heading")}
                        </h2>

                        {/* CTA Button */}
                        <p className="text-gray-600 text-lg mb-8 text-start">
                            {t("servicesSection.description")}
                        </p>
                        <div className="flex justify-start">
                            <button
                                className="bg-[#E94C37] cursor-pointer text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:bg-[#d13d2b] transition-colors"
                                onClick={onOpenPopup}
                            >
                                {t("servicesSection.cta")}
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column - Scrollable Content */}
                <div className="lg:w-2/3 bg-gray-100 relative ">
                    {/* Numbered Navigation */}
                    <div className="sticky top-0 z-20 bg-gray-100/95 backdrop-blur-sm border-b border-[#E94C37]/20 px-6 py-4">
                        <div className="flex flex-wrap gap-6 md:gap-8 max-w-3xl mx-auto">
                            {services.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToService(index)}
                                    className={`relative text-lg font-semibold transition-all duration-300 cursor-pointer ${activeIndex === index
                                        ? "text-[#E94C37]"
                                        : "text-gray-500 hover:text-gray-800"
                                        }`}
                                >
                                    {String(index + 1).padStart(2, "0")}.
                                    {activeIndex === index && (
                                        <motion.div
                                            layoutId="activeIndicator"
                                            className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#E94C37]"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Scrollable Service Cards */}
                    <div
                        ref={scrollContainerRef}
                        className="max-h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#E94C37]/30 scrollbar-track-transparent [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {services.map((service, index) => {
                            const imageUrl = getRandomImageUrl(service.id);
                            return (
                                <div
                                    key={service.id}
                                    ref={(el) => {
                                        cardRefs.current[index] = el;
                                    }}
                                    className="flex items-center px-6 py-4"
                                >
                                    <div className="w-full">
                                        {/* Service Card */}
                                        <div className="bg-white rounded-2xl p-5 lg:p-8 shadow-lg border border-gray-100 max-w-5xl mx-auto">
                                            <div className="space-y-6 pb-2 ">
                                                {/* Title */}
                                                <h3 className="text-2xl font-bold text-gray-900 md:whitespace-nowrap">
                                                    {t(service.titleKey)}
                                                </h3>

                                                {/* Description */}
                                                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                                    {t(service.descriptionKey)}
                                                </p>

                                                {/* Highlights */}
                                                {service.highlightsKeys && (
                                                    <ul className="space-y-3 text-gray-700 text-base md:text-lg">
                                                        {service.highlightsKeys.map((key, idx) => (
                                                            <li key={idx} className="flex items-start space-x-3">
                                                                <span className="mt-1 h-2 w-2 rounded-full bg-[#E94C37]"></span>
                                                                <span>{t(key)}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}

                                                {/* Progress Indicator (if exists) */}
                                                {service.progress && (
                                                    <div className="flex items-center space-x-4 pt-4">
                                                        <div className="w-16 h-16 rounded-full bg-[#E94C37]/10 flex items-center justify-center border-2 border-[#E94C37]/30">
                                                            <span className="text-[#E94C37] font-bold">
                                                                {service.progress}
                                                            </span>
                                                        </div>
                                                        <span className="text-gray-500 text-sm">
                                                            {t("servicesSection.completion")}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseTheBest;