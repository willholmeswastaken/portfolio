import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
                    <div className="col-span-1 md:hidden">
                        <Image
                            alt="John Doe"
                            className="rounded-full"
                            height={100}
                            src="https://avatars.githubusercontent.com/u/13040458"
                            unoptimized
                            style={{
                                aspectRatio: "100/100",
                                objectFit: "cover",
                            }}
                            width={100}
                        />
                    </div>
                    <div className="col-span-1 hidden md:block">
                        <Image
                            alt="John Doe"
                            className="rounded-full"
                            height={200}
                            src="https://avatars.githubusercontent.com/u/13040458"
                            unoptimized
                            style={{
                                aspectRatio: "200/200",
                                objectFit: "cover",
                            }}
                            width={200}
                        />
                    </div>
                    <div className="space-y-3 md:space-y-4 lg:space-y-6 col-span-2">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">Will Holmes</h1>
                        <p className="text-gray-600 dark:text-gray-400 text-md sm:text-base md:text-lg lg:text-xl">
                            I&apos;m a full-stack developer with a passion for building scalable, reliable and functional web applications.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}