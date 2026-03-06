import { Layers, Crown, Check } from "lucide-react";
import PingInfo from "./PingInfo";
import Button from "./Button";

const plans = [
    { id: "basic", name: "Basic", price: "$100/mo", subtitle: "For startup companies", icon: Layers },
    { id: "premium", name: "Premium", price: "$300/mo", subtitle: "Design That Drives Growth", icon: Crown },
    { id: "enterprise", name: "Enterprise", price: "$1000/mo", subtitle: "Scale with Confidence", icon: Check },
];

const features = [
    "1 Custom Training App",
    "Athlete Performance Tracker",
    "Core Coaching Dashboard",
];

export default function PricingSection() {
    return (
        <section className="sm:container mx-4 sm:mx-auto py-20">
            <div className="flex flex-col items-center gap-6">
                <PingInfo text="Pricing" />
                <h2 className="text-center text-3xl md:text-4xl max-w-2xl font-semibold">
                    Plans That Scale with <span className="text-primary">Your Product</span>, Not Just <span className="text-primary">Your Budget</span>
                </h2>

                <div className="flex items-center gap-4 text-sm text-zinc-600 mt-2">
                    <span>Monthly</span>
                    <div className="relative">
                        <div className="h-6 w-12 rounded-full bg-zinc-200" />
                        <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-primary" />
                    </div>
                    <span>Yearly</span>
                </div>
            </div>

            <div className="mt-10 rounded-3xl bg-white p-4 sm:p-6 shadow-lg">
                <div className="block md:hidden mb-4">
                    <div className="flex items-center justify-between gap-4 rounded-2xl p-2  sm:p-6 shadow-sm bg-white bg-linear-to-t from-blue-100 via-white to-white ring-1 ring-blue-100">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-md">
                                <Layers className="text-primary" />
                            </div>
                            <div>
                                <div className="text-base font-semibold text-zinc-900">Basic</div>
                                <div className="text-sm text-zinc-400">For startup companies</div>
                            </div>
                        </div>
                        <div className="text-lg font-bold text-zinc-900">$100/mon</div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 items-stretch">
                    <div className="md:col-span-1 flex flex-col gap-4 md:h-full md:justify-between order-3 md:order-1">
                        {plans.map((p, i) => {
                            const Icon = p.icon;
                            const isBasic = p.id === "basic";
                            return (
                                <div
                                    key={p.id}
                                    className={`${isBasic ? 'hidden md:flex' : 'flex'} items-center justify-between gap-4 rounded-2xl sm:p-6 p-2 shadow-sm bg-white bg-linear-to-t from-blue-100 via-white to-white ring-1 ring-blue-100`}>
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-16 w-12 items-center justify-center rounded-xl bg-white shadow-md">
                                            <Icon className="text-primary" />
                                        </div>
                                        <div>
                                            <div className="text-base font-semibold text-zinc-900">{p.name}</div>
                                            <div className="text-sm text-zinc-400">{p.subtitle}</div>
                                        </div>
                                    </div>
                                    <div className="text-lg font-bold text-zinc-900">{p.price.replace('/mo', '/mon')}</div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="h-full w-full rounded-3xl bg-linear-to-t from-blue-200 to-white p-2 sm:p-6 md:p-10 order-2 md:order-2">

                        <div className=" w-full md:w-80 rounded-xl text-zinc-800">
                            <div className="text-lg font-semibold">Basic</div>
                            <p className="text-sm text-zinc-500">For startup companies</p>
                        </div>

                        <div className="md:col-span-2 rounded-2xl bg-white">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                                <div className="flex flex-col justify-center gap-4 w-full h-full p-4">
                                    <div className="mt-2 text-4xl font-semibold text-zinc-900">$100<span className="text-base font-medium">/mon</span></div>
                                    <div className="flex items-center justify-between gap-8">
                                        <ul className="mt-6 space-y-3 text-sm text-zinc-600">
                                            {features.map((f) => (
                                                <li key={f} className="flex items-center gap-3 text-xs">
                                                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-50 text-primary" aria-hidden="true"><Check size={14} /></span>
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>

                                        <ul className="mt-6 space-y-3 text-sm text-zinc-600">
                                            {features.map((f) => (
                                                <li key={`${f}-2`} className="flex items-center gap-3 text-xs">
                                                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-50 text-primary" aria-hidden="true"><Check size={14} /></span>
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <Button text="Get Started Now" className="w-full flex items-center justify-center text-sm py-2" btnClass="hidden" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
