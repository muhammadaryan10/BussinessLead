"use client";
import React, { useEffect } from 'react'
import { Button } from './ui/MovingBorder'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function Consultation() {
    useEffect(() => {
        AOS.init({
          duration: 800,
          once: false,
        });
      }, []);
    return (
        <div>
            <section>
                <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:h-[80vh] lg:grid-cols-2">
                        <div className="relative z-10 lg:py-16" data-aos="fade-right">
                            <div className="relative h-64 sm:h-80 lg:h-full">
                                <Image
                                        alt="Description of the image" width={500} height={300}
                                    src="https://businessleadsworld.com/best-mca-leads/wp-content/uploads/2024/05/PDQHA7T-min.webp"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="relative flex items-center bg-gray-100" data-aos="fade-left">
                            <span
                                className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                            ></span>

                            <div className="p-8 sm:p-16 lg:p-24">
                                <p className="mb-8 leading-relaxed font-bold text-blue-500"><FontAwesomeIcon icon={faCircleNotch} className='text-rose-700 mx-2' /> REAL BUSINESSES, REAL RESULTS </p>

                                <h2 className="text-2xl font-bold sm:text-3xl">
                                    Feel lost in generic leads 
                                    We deliver targeted MCA Leads that convert fast.                               </h2>

                                <p className="mt-4 text-gray-600">
                                    No more feeling lost Get a FREE Consultation with our expert MCA Lead advisor.
                                    We All listen to your specific needs analyze your current approach and
                                    tailor a customized lead strategy guaranteed to
                                    boost your business growth.
                                </p>
                                <div className='w-full py-4'>
                                    <Button
                                        borderRadius="1.75rem"
                                        className=" bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 transition duration-300 hover:scale-105"
                                    >
                                    Free Consultation
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
