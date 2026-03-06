import { House } from "lucide-react";
import PingInfo from "./PingInfo";
import Image from "next/image";

export default function FeaturesSection() {
    const dataFeatures = [
        {
            title: "Pixel-Perfect interfaces",
            description: "Clean, modular code that perform under pressure and grow with your product.",
        },
        {
            title: "Scalable Frontend Architecture",
            description: "Every screen designed with clarity, detail, and intent from wireframe to final handoff.",
        },
        {
            title: "Conversion-Focused UX",
            description: "Strategic user flow and interaction design that turn clicks into customers",
        }
    ];

    return (
        <section className="container flex flex-col items-center justify-center gap-10 min-h-screen pt-20" >
            <PingInfo text="Features" />
            <h2 className="text-center text-3xl max-w-md">From Pixel to Performance - Here's What <span className="text-primary">We Do Best</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {dataFeatures.map((feature, index) => (
                    <div key={index} className={`flex flex-col items-center gap-4 p-6 h-75 rounded-2xl shadow-md ${index === 1 ? "bg-linear-to-t from-blue-200 to-white" : "bg-radial-to-t from-blue-200 to-white to-40%  bg-radial-[at_50%_0%]"}`}>
                        <div className="flex items-center justify-center h-full w-full">
                            <Image src="/Next.js.svg" alt="Vercel Logo" width={100} height={24} />
                        </div>
                        <div className={`bg-white p-2 ${index === 1 ? "shadow-md rounded-xl" : ""}`}>
                            <h3 className="text-lg font-bold text-primary">{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    </div>
                ))}

            </div>
        </section >
    );
}