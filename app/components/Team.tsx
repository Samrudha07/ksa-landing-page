"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { jost } from "@/app/fonts";
import { useTranslation } from "react-i18next";

interface TeamMember {
    name: string;
    title: string;
    description: string;
    image: string;
}

const Team = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === "ar";

    const membersData = t("team.members", { returnObjects: true }) as Record<string, TeamMember>;
    const teamMembers = Object.entries(membersData).map(([id, data]) => ({
        id,
        ...data
    }));

    return (
        <section className={`w-full py-16 lg:py-24 bg-white ${jost.className}`}>
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className={`mb-16 ${isRtl ? "text-right" : "text-left"}`}>
                    <div className={`flex items-center gap-2 mb-4 ${isRtl ? "flex-row-reverse" : "flex-row"}`}>
                        <div className="w-1 h-6 bg-[#E94C37]" />
                        <span className="text-[#E94C37] text-xl font-extrabold uppercase tracking-wider">
                            {t("team.badge")}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0d1b3f]">
                        {t("team.heading")}
                    </h2>
                </div>

                {/* Team Members */}
                <div className="space-y-20 lg:space-y-28">
                    {teamMembers.map((member, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={member.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                                    } items-center gap-10 lg:gap-16`}
                                dir={isRtl ? "rtl" : "ltr"}
                            >
                                {/* Image */}
                                <div className="w-full sm:w-[70%] lg:w-[28%] max-w-[260px] relative mx-auto lg:mx-0">
                                    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl shadow-md bg-slate-100">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            sizes="(max-width: 640px) 70vw, (max-width: 1024px) 35vw, 28vw"
                                            className="object-cover"
                                        />
                                    </div>
                                </div>


                                {/* Content */}
                                <div className="w-full lg:w-1/2 space-y-6">
                                    <h3 className="text-3xl font-bold text-[#0d1b3f]">
                                        {member.name}
                                    </h3>
                                    <p className="text-[#E94C37] font-semibold text-lg">
                                        {member.title}
                                    </p>
                                    <div className={`w-16 h-1 bg-[#E94C37] ${isRtl ? "mr-0 ml-auto" : ""}`} />
                                    <p className="text-slate-600 text-lg leading-relaxed">
                                        {member.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Team;
