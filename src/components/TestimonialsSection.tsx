import { ArrowLeft, ArrowRight } from "lucide-react";
import PingInfo from "./PingInfo";
import Image from "next/image";

const dataTestimonials = [
    {
        title: "Incredible Performance",
        description: "The performance improvements were immediate and noticeable."
    },
    {
        title: "Great Design",
        description: "The design is clean, modern, and user-friendly."
    },
    {
        title: "Easy to Use",
        description: "The interface is intuitive and easy to navigate."
    },
    {
        title: "Incredible Performance",
        description: "The performance improvements were immediate and noticeable."
    },
    {
        title: "Great Design",
        description: "The design is clean, modern, and user-friendly."
    },
    {
        title: "Easy to Use",
        description: "The interface is intuitive and easy to navigate."
    }
]

export default function TestimonialsSection() {
    return (
        <section className="container mx-auto px-4 py-20">
            <div className="flex flex-col items-center gap-10">
                <PingInfo text="Testimonials" />
                <div className="flex items-start justify-between w-full">
                    <h2 className="text-3xl max-w-md text-center sm:text-left w-full">They Came for Design. They Stayed for <span className="text-primary">Performance.</span></h2>
                    <div className=" items-center justify-center gap-4 hidden sm:flex">
                        <div className="flex items-center justify-center text-white bg-primary h-8 w-8 rounded-full">
                            <ArrowLeft />
                        </div>

                        <div className="flex items-center justify-center text-white bg-primary h-8 w-8 rounded-full">
                            <ArrowRight />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-4  sm:hidden">
                    <div className="flex items-center justify-center text-white bg-primary h-8 w-8 rounded-full">
                        <ArrowLeft />
                    </div>

                    <div className="flex items-center justify-center text-white bg-primary h-8 w-8 rounded-full">
                        <ArrowRight />
                    </div>
                </div>
                <div className="flex items-start gap-4 overflow-x-auto snap-x snap-mandatory px-20 pb-6">
                    {dataTestimonials.map((feature, index) => (
                        <div key={index} className={`flex flex-col items-center gap-4 h-72 rounded-2xl shadow-md flex-shrink-0 max-w-[300px] p-2 sm:min-w-[45%] md:min-w-[30%] snap-start ${index === 1 ? "bg-linear-to-t from-blue-200 to-white" : "bg-radial-to-t from-blue-200 to-white to-40%  bg-radial-[at_50%_0%]"}`}>
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
            </div>
        </section>
    );
}