"use client";
 
import React, { useEffect } from 'react'
import { PinContainer } from './ui/3dPin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function Steps() {
    useEffect(() => {
        AOS.init({
          duration: 1500,
          once: false,
        });
      }, []);
    return (
        <div>
            <section className="bg-gray-800 text-white">
                <div className="max-w-screen-xl  py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="max-w-xl" data-aos="zoom-in-right">
                        <p className="mb-8 leading-relaxed font-bold text-blue-500"><FontAwesomeIcon icon={faCircleNotch} className='text-rose-700 mx-2' /> REAL BUSINESSES REAL RESULTS </p>

                        <h2 className="text-2xl font-bold sm:text-4xl sm:p-0 p-2">We Find You Best MCA Leads in 4 Easy Steps</h2>

                        <p className="mt-4 text-gray-300 sm:p-0 p-2">
                            Leveraging advanced sourcing and verification we connect you with borrowers actively seeking funding maximizing your conversion potential.

                            From targeted live transfers to pre-qualified callbacks we tap diverse channels to deliver
                            a steady stream of high-quality leads.
                        </p>
                    </div>
                    <div className="mt-8 grid grid-cols-1 gap-0 space-y-4 md:mt-16 md:grid-cols-2  lg:grid-cols-4">
                        <div className=" w-full flex items-center justify-center ">
                            <PinContainer
                                title="Data Source Validation"
                                href="Data Source Validation"
                            >
                                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[14rem] h-[18rem] ">
                                    <Image   alt="Description of the image" width={500} height={400} src='https://businessleadsworld.com/best-mca-leads/wp-content/uploads/2024/05/manage_search.webp' className='bg-blue-500 mb-4 h-16 w-16  p-2' />
                                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-xl text-black">
                                        1. Data Source Validation
                                    </h3>
                                    <div className="text-base !m-0 !p-0 font-normal">
                                        <span className="text-slate-500 ">
                                            We partner with reputable data providers and employ advanced filters to ensure accurate lead information.                                        </span>
                                    </div>

                                </div>
                            </PinContainer>
                        </div>
                        <div className=" w-full flex items-center justify-center ">
                            <PinContainer
                                title="Contact Verification"
                                href=""
                            >
                                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[14rem] h-[18rem] ">
                                    <Image   alt="Description of the image" width={500} height={400} src='https://businessleadsworld.com/best-mca-leads/wp-content/uploads/2024/05/edit_note.webp' className='bg-blue-500 mb-4 h-16 w-16 p-2' />

                                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-xl text-black">
                                        2. Contact Verification
                                    </h3>
                                    <div className="text-base !m-0 !p-0 font-normal">
                                        <span className="text-slate-500 ">
                                            We confirm phone numbers and email addresses through multiple channels to guarantee reachability.
                                        </span>
                                    </div>
                                </div>
                            </PinContainer>
                        </div>
                        <div className=" w-full flex items-center justify-center ">
                            <PinContainer
                                title="Interest Verification"
                                href=""
                            >
                                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[14rem] h-[18rem] ">
                                    <Image   alt="Description of the image" width={500} height={400} src='https://businessleadsworld.com/best-mca-leads/wp-content/uploads/2024/05/done_all.webp' className='bg-blue-500 mb-4 h-16 w-16 p-2' />

                                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-xl text-black">
                                        3. Interest Verification
                                    </h3>
                                    <div className="text-base !m-0 !p-0 font-normal">
                                        <span className="text-slate-500 ">
                                            Leads are screened for their current need for funding ensuring you connect with active borrowers.
                                        </span>
                                    </div>
                                </div>
                            </PinContainer>
                        </div>
                        <div className=" w-full flex items-center justify-center ">
                            <PinContainer
                                title="Compliance Checks"
                                href=""
                            >
                                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[14rem] h-[18rem] ">
                                    <Image   alt="Description of the image" width={500} height={400} src='https://businessleadsworld.com/best-mca-leads/wp-content/uploads/2024/05/currency_exchange.webp' className='bg-white mb-4 h-16 w-16 p-2' />

                                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-xl text-black">
                                        4. Compliance Checks
                                    </h3>
                                    <div className="text-base !m-0 !p-0 font-normal">
                                        <span className="text-slate-500 ">
                                            We adhere to all industry regulations and data privacy laws to deliver compliant and reliable leads.
                                        </span>
                                    </div>
                                </div>
                            </PinContainer>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
