    "use client";
    import { cn } from "@/utils/cn";
    import { faStar } from "@fortawesome/free-regular-svg-icons";
    import { AnimatePresence, motion } from "framer-motion";
    import Link from "next/link";
    import { useState } from "react";
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import Star from '@/assests/star.svg'
    import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
    import Image from "next/image";

    export const HoverEffect = ({
        items,
        className,
    }: {
        items: {
            title: string;
            description: string;
            link: string;
            name:string;
        }[];
        className?: string;
    }) => {
        let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
        

        return (
            <div
                className={cn(
                    "grid grid-cols-1 md:grid-cols-2 bg-white lg:grid-cols-3  p-10",
                    className
                )}
            >
                {items.map((item, idx) => (
                    // <Link
                    //   href={item?.link}
                    //   
                    //   className="relative group  block p-2 h-full w-full"
                    //   onMouseEnter={() => setHoveredIndex(idx)}
                    //   onMouseLeave={() => setHoveredIndex(null)}
                    // >
                    <div className='relative group  block p-2 h-full w-full'
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        key={item?.link}>
                        <AnimatePresence>
                            {hoveredIndex === idx && (
                                <motion.span
                                    className="absolute inset-0 h-full w-full bg-blue-500 dark:bg-slate-800/[0.8] block  rounded-3xl"
                                    layoutId="hoverBackground"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: { duration: 0.15 },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        transition: { duration: 0.15, delay: 0.2 },
                                    }}
                                />
                            )}
                        </AnimatePresence>
                        <Card>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                            <div className="py-3 flex justify-between">
                                <div className="flex justify-start">
                                    <Image   alt="Description of the image" width={500} height={400} className="h-16 w-16" src={item.link} />
                                    <div className="flex justify-between flex-col">
                                        <p className="pl-3 text-white">
                                            {item.name}
                                        </p>
                                        <div className="pl-3 text-gray-500 text-xs flex flex-col">
                                            <p> {item.desigination} </p>
                                            <p> {item.firm} </p>
                                        </div>
                                    </div>
                                </div>
                                <FontAwesomeIcon icon={faQuoteRight} className="h-10 w-10 text-blue-500" />                        </div>
                        </Card>
                    </div>
                    // </Link>
                ))}
            </div>
        );
    };

    export const Card = ({
        className,
        children,
    }: {
        className?: string;
        children: React.ReactNode;
    }) => {
        return (
            <div
                className={cn(
                    "rounded-2xl h-full w-full p-4 overflow-hidden bg-gray-800 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
                    className
                )}
            >
                <div className="relative z-50">
                    <div className="flex p-2 pb-0">
                    <svg
                        className='star w-8 h-8 text-yellow-500'
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                        className='star w-8 h-8 text-yellow-500'
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                        className='star w-8 h-8 text-yellow-500'
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                        className='star w-8 h-8 text-yellow-500'
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                        className='star w-8 h-8 text-yellow-500'
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    </div>
                    <div className="p-4">{children}</div>
                </div>
            </div>
        );
    };
    export const CardTitle = ({
        className,
        children,
    }: {
        className?: string;
        children: React.ReactNode;
    }) => {
        return (
            <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
                {children}
            </h4>
        );
    };
    export const CardDescription = ({
        className,
        children,
    }: {
        className?: string;
        children: React.ReactNode;
    }) => {
        return (
            <p
                className={cn(
                    "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
                    className
                )}
            >
                {children}
            </p>
        );
    };
