import PingInfo from "./PingInfo";
import { Minus, Plus } from "lucide-react";

const faqs = [
    {
        id: 1,
        q: "Is my agency and client data secure?",
        a: "Yes, we use industry-standard encryption and security practices to protect all data.",
        open: true,
    },
    { id: 2, q: "How easy is it for my clients to use?", a: "Our UI is built for clarity and simplicity so your clients can onboard quickly.", open: false },
    { id: 3, q: "What's included in a UI audit?", a: "A UI audit includes heuristics review, accessibility checks and actionable recommendations.", open: false },
    { id: 4, q: "Can I manage different projects or clients separately?", a: "Yes — projects and clients can be organized and managed independently.", open: false },
    { id: 5, q: "Can I collaborate with my devs?", a: "You can share specs, assets and comments directly with your development team.", open: false },
];

export default function FAQSection() {
    return (
        <section className="container mx-auto py-20">
            <div className="flex flex-col items-center gap-6">
                <PingInfo text="FAQs" />
                <h2 className="text-center text-3xl md:text-4xl max-w-2xl font-semibold">
                    Have Questions? We've Got <span className="text-primary">Answers</span>
                </h2>
            </div>

            <div className="mt-10 space-y-4">
                {faqs.map((f) => (
                    <div
                        key={f.id}
                        className={`rounded-2xl bg-white p-6 shadow-md border border-white/60 ${f.open ? "" : "bg-gradient-to-r from-white to-white/95"}`}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-6">
                                <div className="text-sm text-zinc-400">{String(f.id).padStart(2, "0")}.</div>
                                <h3 className="text-base font-medium text-zinc-900">{f.q}</h3>
                            </div>

                            <div className="text-zinc-600">
                                {f.open ? (
                                    <div className="h-6 w-6 flex items-center justify-center rounded-full">
                                        <Minus size={16} />
                                    </div>
                                ) : (
                                    <div className="h-6 w-6 flex items-center justify-center rounded-full">
                                        <Plus size={16} />
                                    </div>
                                )}
                            </div>
                        </div>

                        {f.open && (
                            <div className="mt-4 text-sm text-zinc-600">
                                {f.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
