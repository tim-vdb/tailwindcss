import Image from "next/image";
import Button from "./Button";
import PingInfo from "./PingInfo";

export default function HeroSection() {
    return (
        <section className="flex flex-col items-center justify-center gap-5 text-center min-h-screen ">
            <div className="container flex flex-col items-center gap-10 bg-linear-to-t from-blue-200 to-white mx-8 rounded-4xl pb-20 pt-32">
                <PingInfo text="Pixel-Perfect Power" />
                <h1 className="text-4xl font-bold mb-4 max-w-md">Elevate Your Product with Precision <span className="font-extralight text-blue-900">- Driven wilux</span></h1>
                <p className="max-w-md">Pixel Powerhouse builds user-focused digital experiences that look stunning and perform flawlessly across platforms.</p>
                <div className="flex flex-col items-center justify-center gap-4 w-full sm:flex-row">
                    <Button text="Start a free trail" className="flex items-center justify-center w-full sm:w-fit" />
                    <button className="text-primary bg-white shadow-md py-2 px-4 rounded-full w-full sm:w-fit">See Plans</button>
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <p>Trusted by 150+ Companies</p>
                <div className="flex items-center justify-center gap-20 [&>img]:grayscale [&>img]:opacity-40">
                    <Image src="/next.svg" alt="Vercel Logo" width={100} height={24} />
                    <Image src="/next.svg" alt="Vercel Logo" width={100} height={24} />
                    <Image src="/next.svg" alt="Vercel Logo" width={100} height={24} />
                    <Image src="/next.svg" alt="Vercel Logo" width={100} height={24} />
                    <Image src="/next.svg" alt="Vercel Logo" width={100} height={24} />
                </div>
            </div>
        </section>
    );
}