import { ArrowRight } from "lucide-react";

export default function Button({ text, className, btnClass }: { text: string; className?: string; btnClass?: string }) {
    return (
        <button className={`flex items-center gap-2 rounded-full bg-primary text-white px-4 py-1 ${className || ""}`}>
            <span>{text}</span>
            <div className={`flex items-center justify-center rounded-full bg-white w-8 h-8 ${btnClass || ""}`}>
                <ArrowRight className="text-primary" />
            </div>
        </button>
    );
}