"use client";

import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export const Stats = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <>        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-gray-800">
                <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
                    <div className="text-center">
                        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-white  sm:w-12 sm:h-12">
                            <svg
                                className="w-8 h-8 text-blue-500 sm:w-10 sm:h-10"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="text-4xl font-bold text-yellow-500">
                            {counterOn && <CountUp
                                start={0}
                                end={151.6}
                                duration={3}
                                delay={0}
                            />}
                            k
                        </h6>
                        <p className="mb-2 font-bold text-white">Leads</p>
                        <p className="text-white">
                        MCA Leads Generated
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-white sm:w-12 sm:h-12">
                            <svg
                                className="w-8 h-8 text-blue-500 sm:w-10 sm:h-10"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="text-4xl font-bold text-yellow-500">
                            {counterOn && <CountUp
                                start={0}
                                prefix="$"
                                end={37.6}
                                duration={3}
                                delay={0}
                            />}M
                        </h6>
                        <p className="mb-2 font-bold text-white">Revenue</p>
                        <p className="text-white">
                        Client Revenue Generated
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-white sm:w-12 sm:h-12">
                            <svg
                                className="w-8 h-8 text-blue-500 sm:w-10 sm:h-10"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="text-4xl font-bold text-yellow-500">    {counterOn && <CountUp
                            start={0}
                            end={229}
                            prefix="$"
                            duration={3}
                            delay={0}
                        />}M</h6>
                        <p className="mb-2 font-bold text-white">Client</p>
                        <p className="text-white">
                        Client Pipeline Generated
                        </p>
                    </div>
                </div>
            </div>
        </ScrollTrigger>
        </>

    );
};