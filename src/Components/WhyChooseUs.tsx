"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "../Components/ui/Card";
import { Button } from '../Components/ui/MovingBorder'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);
  return (
    <>

      <section className="overflow-hidden py-8 px-5 sm:py-16 "  style={{ backgroundColor: '#f2f6f9' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-4 gap-y-16 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4" data-aos="fade-right">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-blue-500">WHO WE ARE</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">We Are Business Leads World</p>
                <p className="mt-6 text-sm leading-7 text-gray-600">We bring pre-verified borrowers seeking MCAs Business Loans and more directly
                  to your doorstep. Whether you need the prospects for cash injection or a strategic
                  long-term partnership we deliver the perfect fit fueling your business growth
                  from the ground up.
                </p>
                <h2 className="text-base font-semibold py-2 leading-7 text-blue-500">WHY CHOOSE US</h2>
                <dl className="mt-4 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline pl-2 font-semibold text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                      fill="currentColor" aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-blue-500">
                      <path
                        d="M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z">
                      </path>
                      <path
                        d="M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 8.87z">
                      </path>
                      <path
                        d="M10.38 1.103a.75.75 0 00-.76 0l-7.25 4.25a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.76 0l7.25-4.25a.75.75 0 000-1.294l-7.25-4.25z">
                      </path>
                    </svg>Targeted Leads
                    </dt>
                    <dd className="inline pl-2">No more cold calling! We deliver borrowers actively seeking merchant cash advances.
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline pl-2 font-semibold text-gray-900">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-blue-500">
                        <path fill-rule="evenodd"
                          d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                          clip-rule="evenodd"></path>
                      </svg>
                      Proven Results
                    </dt>
                    <dd className="inline pl-2">We track test and optimize to ensure you get the best MCA leads that convert.</dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline pl-2 font-semibold text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                      fill="currentColor" aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-blue-500">
                      <path fill-rule="evenodd"
                        d="M14.5 10a4.5 4.5 0 004.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 01-.493.11 3.01 3.01 0 01-1.618-1.616.455.455 0 01.11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 00-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 103.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01zM5 16a1 1 0 11-2 0 1 1 0 012 0z"
                        clip-rule="evenodd"></path>
                      <path
                        d="M14.5 11.5c.173 0 .345-.007.514-.022l3.754 3.754a2.5 2.5 0 01-3.536 3.536l-4.41-4.41 2.172-2.607c.052-.063.147-.138.342-.196.202-.06.469-.087.777-.067.128.008.257.012.387.012zM6 4.586l2.33 2.33a.452.452 0 01-.08.09L6.8 8.214 4.586 6H3.309a.5.5 0 01-.447-.276l-1.7-3.402a.5.5 0 01.093-.577l.49-.49a.5.5 0 01.577-.094l3.402 1.7A.5.5 0 016 3.31v1.277z">
                      </path>
                    </svg>Verified Data </dt>
                    <dd className="inline pl-2">Drive quicker conversions with verified lead information and boost your business growth.
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="mt-10 flex items-center gap-x-6">
                {/* <a href="#"
                  className="rounded-md hover:scale-105 shadow-xl transition duration-300 bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white  focus-visible:outline ">
                  Contact Now  <span aria-hidden="true">→</span>
                </a> */}
                <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 transition duration-300 hover:scale-105"
                >
                  Conact Us
                </Button>
              </div>
            </div>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  Start Connecting with Qualified Borrowers Today
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Whether you have questions about our MCA and Business Loan leads need help customizing your search or want to chat about your financial goals we are here
                  to help.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image  width={500} height={400}
                    src="https://businessleadsworld.com/best-mca-leads/wp-content/uploads/2024/05/ZJMZKPH-min.webp"
                    // height="1100"
                    // width="1000"
                    className="h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                {/* <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href="https://twitter.com/mannupaaji"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Sign up
                  </CardItem>
                </div> */}
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </section>
    </>
  );
}
