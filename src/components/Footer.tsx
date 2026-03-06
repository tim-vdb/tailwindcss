import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowUpRight } from "lucide-react";

const leftLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#" },
    { label: "Services", href: "#" },
    { label: "Pricing", href: "#" },
];

const rightLinks = [
    { label: "About us", href: "#" },
    { label: "Integrations", href: "#" },
    { label: "Testimonials", href: "#" },
    { label: "FAQs", href: "#" },
];

export default function Footer() {
    return (
        <footer className="bg-[#0b0b0b] text-white">
            <div className="container mx-auto px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-md bg-blue-600 flex items-center justify-center font-bold">P</div>
                            <div className="text-lg font-semibold text-white">Pixel Power</div>
                        </div>
                        <p className="text-sm text-zinc-400 max-w-xs">Pixel Powerhouse® — Built with precision. Designed for impact.</p>

                        <div className="flex items-center gap-3 text-zinc-300">
                            <a aria-label="facebook" href="#" className="p-2 rounded-full hover:bg-white/5"><Facebook size={18} /></a>
                            <a aria-label="instagram" href="#" className="p-2 rounded-full hover:bg-white/5"><Instagram size={18} /></a>
                            <a aria-label="twitter" href="#" className="p-2 rounded-full hover:bg-white/5"><Twitter size={18} /></a>
                            <a aria-label="linkedin" href="#" className="p-2 rounded-full hover:bg-white/5"><Linkedin size={18} /></a>
                            <a aria-label="youtube" href="#" className="p-2 rounded-full hover:bg-white/5"><Youtube size={18} /></a>
                        </div>
                    </div>

                    <div className="md:col-span-2 flex flex-col md:flex-row md:justify-end gap-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-20">
                            <div>
                                <ul className="space-y-3 text-sm text-zinc-300">
                                    {leftLinks.map((l) => (
                                        <div key={l.label} className="flex items-center gap-2 ">
                                            <li><a href={l.href} className="hover:underline">{l.label}</a></li>
                                            <ArrowUpRight className="h-4 w-4" />
                                        </div>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <ul className="space-y-3 text-sm text-zinc-300">
                                    {rightLinks.map((l) => (
                                        <div key={l.label} className="flex items-center gap-2">
                                            <li><a href={l.href} className="hover:underline">{l.label}</a></li>
                                            <ArrowUpRight className="h-4 w-4" />
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-8 border-zinc-800" />

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
                    <div>©2025 BayFi. All rights reserved.</div>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms of Service</a>
                        <a href="#" className="hover:underline">Cookies Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
