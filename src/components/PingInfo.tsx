export default function PingInfo({ text }: { text: string }) {
    return (
        <div className="flex items-center justify-center gap-2 rounded-full border border-neutral-300 py-2 px-4">
            <span className="relative flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-primary"></span>
            </span>
            <p>{text}</p>
        </div>
    );
}