"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <>
      <section style={{ backgroundColor: '#f9f9f9' }} >
        <div className="container mx-auto flex px-5 pt-20 items-center justify-center flex-col pb-6">
          <div className="text-center lg:w-2/3 w-full">
            <p className="mb-8 leading-relaxed font-bold text-blue-500"><FontAwesomeIcon icon={faCircleNotch} className='text-rose-700 mx-2' /> REAL BUSINESSES, REAL RESULTS </p>
            <h1 className="title-font sm:text-5xl text-2xl mb-4 font-bold text-gray-800">MCA Leads Made Easy</h1>
          </div>
        </div>
      </section>
      <motion.div
        // animate={{
        //   backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        // }}
        style={{ backgroundColor: '#f9f9f9' }}
        className="h-[35rem] overflow-y-auto flex sm:justify-between justify-center relative p-10"
        ref={ref}
      >
        <div className="div relative flex items-start px-4">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-2xl font-bold text-gray-800"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-kg text-gray-500 max-w-sm mt-10"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        <div
          // style={{ background: backgroundGradient }}
          className={cn(
            "hidden lg:block md:block  h-80  rounded-md bg-white sticky top-10 overflow-hidden",
            contentClassName
          )}
          style={{ width: '570px' }}
        >
          <section className="bg-white shadow-2xl rounded-md" >
            <div className="container mx-auto flex py-5 md:py-3 items-center justify-center flex-col">
              <div className="text-center w-full p-2">
                <p className="mb-6 leading-relaxed text-blue-500 font-semibold"> LEAD GENERATION SERVICES WE OFFER</p>
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-800">MCA Leads Made Easy</h1>
                <h1 className="title-font sm:text-2xl text-2xl mb-4 font-bold text-gray-800">Powerful MCA Data for Unstoppable Growth</h1>
                <p className="mb-8 leading-relaxed text-gray-500">Choose from High-Quality Business Loan, Live Transfer, & Callback Leads.</p>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </>
  );
};
