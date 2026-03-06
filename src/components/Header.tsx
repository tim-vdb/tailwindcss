import { ArrowRight, Menu } from "lucide-react";
import Image from "next/image";
import Button from "./Button";

export default function Header() {
    const navItems = [
        { name: "Home", href: "#" },
        { name: "About", href: "#" },
        { name: "Services", href: "#" },
        { name: "Contact", href: "#" },
    ];

    return (
        <header className="min-w-60 fixed top-10 left-1/2 -translate-x-1/2 z-80 container flex items-center justify-between gap-10 p-2 pl-5 rounded-full shadow-md sm:w-fit bg-white">
            <Image
                src="/next.svg"
                alt="Vercel Logo"
                width={100}
                height={24}
            />
            <div className="hidden sm:flex items-center justify-between gap-5">
                <nav>
                    <ul className="flex space-x-4">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a href={item.href} className="text-black">{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Button text="Book a Call" />
            </div>
            <Menu className="block sm:hidden text-primary" />
        </header>
    );
}