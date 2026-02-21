// import Image from "next/image";
// import { Check } from "lucide-react";

// const features = [
//     "Compliance & Advisory Specialists",
//     "Member of  Global Network",
//     "Local GCC Market Expertise",
//     "Serving SMEs & MNEs Across GCC",
// ];

// const About = () => {
//     return (
//         <section className="w-full  lg:py-24">
//             <div className="w-full max-w-8xl mx-auto px-6 lg:px-16">

//                 <span className="bg-[#E94C37] text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:bg-[#d13d2b] transition-colors mb-12 inline-block">
//                     About Company
//                 </span>
//                 {/* GRID: Image Left + Content Right */}
//                 <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

//                     {/* Left: Image */}
//                     <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg">
//                         <Image
//                             src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
//                             alt="Professional advisory team collaborating in a modern office"
//                             width={1200}
//                             height={800}
//                             className="w-full h-full object-cover"
//                             priority
//                         />
//                     </div>

//                     {/* Right: Content */}
//                     <div className="flex flex-col">
//                         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
//                             Compliance & Advisory Excellence for Businesses in Saudi Arabia
//                         </h2>

//                         <p className="text-muted-foreground text-base leading-relaxed mb-6">
//                             Mac &amp; Ross Management Company is a leading Compliance and Advisory firm in Saudi Arabia.
//                             As a member of , a globally recognized network, we combine local market expertise
//                             with international standards to provide strategic financial solutions.
//                         </p>

//                         <p className="text-muted-foreground text-base leading-relaxed mb-8">
//                             With a dedicated team of 70+ professionals across the GCC, we serve both SME and MNE clients,
//                             helping them navigate complex regulatory environments and drive sustainable growth.
//                         </p>

//                         {/* Features List */}
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
//                             {features.map((feature) => (
//                                 <div key={feature} className="flex items-center gap-3">
//                                     <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
//                                         <Check className="w-5 h-5 text-primary-foreground" strokeWidth={3} />
//                                     </div>
//                                     <span className="text-foreground font-medium">{feature}</span>
//                                 </div>
//                             ))}
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default About;
"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { jost } from "@/app/fonts";
import { useTranslation } from "react-i18next";


const About = ({ onOpenPopup }) => {
    const { t } = useTranslation();

    const featureKeys = [
        "about.feature1",
        "about.feature2",
        "about.feature3",
        "about.feature4",
    ];

    return (
        <section className={`w-full lg:py-6 ${jost.className} absoulte z-0`}>
            <div className=" max-w-8xl mx-auto px-6 lg:px-16">

                {/* Title Badge */}
                <div className="flex items-center space-x-2 mb-8 text-center justify-start">
                    <div className="w-1 h-6 bg-[#E94C37]"></div>
                    <span className="text-[#E94C37] text-xl font-extrabold uppercase tracking-wider">
                        {t("about.badge")}
                    </span>
                </div>

                {/* GRID – Image Left | Content Right */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left: Image */}
                    <div className="absoulte z-10 w-full h-full rounded-3xl overflow-hidden shadow-lg ">
                        <Image
                            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
                            alt="Professional advisory team collaborating in a modern office"
                            width={1200}
                            height={800}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </div>

                    {/* Right: Text Content */}
                    <div className="flex flex-col">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0d1b3f] mb-6 leading-tight">
                            {t("about.heading")}
                        </h2>

                        <p className="text-gray-600 text-lg text-justify mb-6">
                            {t("about.description1")}
                        </p>

                        <p className="text-gray-600 text-lg text-justify mb-8">
                            {t("about.description2")}
                        </p>

                        {/* Features List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {featureKeys.map((key) => (
                                <div
                                    key={key}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E94C37]">
                                        <Check className="w-5 h-5 text-white" strokeWidth={3} />
                                    </div>
                                    <span className="text-[#0d1b3f] font-medium">
                                        {t(key)}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* {onOpenPopup && (
                            <button
                                onClick={onOpenPopup}
                                className="inline-flex items-center justify-center self-start rounded-2xl bg-[#E94C37] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[#d13d2b] transition-colors"
                            >
                                {t("hero.contactButton")}
                            </button>
                        )} */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
