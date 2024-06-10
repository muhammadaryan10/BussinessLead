import { HoverEffect } from "@/Components/ui/card-hover-effect";
import { InfiniteMovingCards } from "@/Components/ui/infinite-moving-cards";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import WhyChooseUs from '../Components/WhyChooseUs'
import { Button } from "@/Components/ui/MovingBorder";
import { TypewriterEffectSmooth } from "@/Components/typewriterEffect";
import { SignupFormDemo } from "@/Components/Form";
import Steps from "@/Components/Steps";
import  Stats  from "@/Components/Stats";
import { Footer } from "@/Components/Footer";
import Consultation from "@/Components/Consultation";


const content = [
  {
    title: "Merchant Cash Advance Leads",
    description:
      "● Tired of cold calling and ineffective marketing? Let us bring qualified MCA leads directly to you. Our leads are pre-verified and interested in securing funding, saving you valuable time and money.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "MCA Business Loan Leads",
    description:
      "● Access a network of qualified potential borrowers seeking business loans, from equipment loans to expansion capital. Our leads come complete with essential business information, allowing you to tailor your approach and close deals faster.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "MCA Live Transfer Leads",
    description:
      "Skip the lead nurturing and connect directly with motivated borrowers ready to discuss their MCA needs. Live connections mean faster conversions and immediate access to potential clients.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "MCA Callback Leads",
    description:
      "Callback leads offer flexibility and control, letting you manage your outreach schedule effectively.Let us connect you with pre-qualified borrowers who request a callback at their convenience.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
];

const words = [
  {
    text: "Leads",
    className: 'text-yellow-500'
  },
  {
    text: "Your",
    className: 'text-yellow-500'
  },
  {
    text: "Business",
    className: 'text-yellow-500'
  },
  {
    text: "Needs",
    className: 'text-yellow-500'
  },

];

const projects = [
  {
    title: "I recommend Business Leads World",
    description:
      "Before working with you chasing leads was a nightmare. Now qualified borrowers come to me My conversion rate tripled and my business is booming",
    link: "https://businessleadsworld.com/best-mca-leads/wp-content/uploads/2024/05/2.webp",
    name: 'Cole Miller',
    desigination: 'CEO,',
    firm: 'IT Firm'
  },
  {
    title: "Their Live Transfer Leads are the best",
    description:
      "Their leads reduced our effort in generating leads and saved us a lot of time. Our closing ratio has increased significantly since we started using Business Leads World.",
    link: "https://businessleadsworld.com/best-mca-leads/wp-content/uploads/2024/05/Client-Faces-Thumbnails-for-BLW-Landing-Page-1.webp",
    name: 'Maxwell Frost',
    desigination: 'Owner,',
    firm: 'Experts Funding Group'
  },
  {
    title: "Their MCA Data is the best! Thank you BLW",
    description:
      "My marketing efforts were not generating the right funding leads. Your targeted Business Loan Leads changed everything for my business.",
    link: "https://businessleadsworld.com/best-mca-leads/wp-content/uploads/2024/05/Client-Faces-Thumbnails-for-BLW-Landing-Page.webp",
    name: 'Michael Lee',
    desigination: 'CFO,',
    firm: 'Fintech Firm'
  },
  {
    title: "I recommend Business Leads World",
    description:
      "Before working with you chasing leads was a nightmare. Now qualified borrowers come to me My conversion rate tripled and my business is booming.",
    link: "https://businessleadsworld.com/best-mca-leads/wp-content/uploads/2024/05/2.webp",
    name: 'Cole Miller',
    desigination: 'CEO,',
    firm: 'IT Firm'
  },
  {
    title: "Their Live Transfer Leads are the best",
    description:
      "Their leads reduced our effort in generating leads and saved us a lot of time. Our closing ratio has increased significantly since we started using Business Leads World.",
    link: "https://businessleadsworld.com/best-mca-leads/wp-content/uploads/2024/05/Client-Faces-Thumbnails-for-BLW-Landing-Page-1.webp",
    name: 'Maxwell Frost',
    desigination: 'Owner,',
    firm: 'Experts Funding Group'
  },
  {
    title: "Their MCA Data is the best Thank you BLW!",
    description:
      "My marketing efforts were not generating the right funding leads. Your targeted Business Loan Leads changed everything for my business.",
    link: "https://businessleadsworld.com/best-mca-leads/wp-content/uploads/2024/05/Client-Faces-Thumbnails-for-BLW-Landing-Page.webp",
    name: 'Michael Lee',
    desigination: 'CFO,',
    firm: 'Fintech Firm'
  },
];

const testimonials = [
  {
    link: 'https://businessleadsworld.com/best-mca-leads/wp-content/uploads/2023/12/RFR-Best-MCA-Leads-Client.webp'
  },
  {
    link: 'https://businessleadsworld.com/best-mca-leads/wp-content/uploads/2023/12/Peach-Capital-Best-MCA-Leads-Client.webp'
  },
  {
    link: 'https://businessleadsworld.com/best-mca-leads/wp-content/uploads/2024/05/brand-8.webp'
  },
  {
    link: 'https://businessleadsworld.com/best-mca-leads/wp-content/uploads/2024/05/Pro-Source-Lending-Group-Best-MCA-Leads-Client.webp'
  },
  {
    link: 'https://businessleadsworld.com/best-mca-leads/wp-content/uploads/2023/12/Experts-Funding-Group-Best-MCA-Leads-Client.webp'
  },
  {
    link: 'https://businessleadsworld.com/best-mca-leads/wp-content/uploads/2024/05/brand-7.webp'
  }
];

const Home = () => {

  return (
    <>
      {/* <div className="h-[50rem] w-full flex  md:items-between md:justify-between antialiased bg-grid-white/[0.02] relative overflow-hidden" style={{backgroundImage: 'url("https://airforshare.com/files/SLDyDN.webp")'}}>
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="gray"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Spotlight <br /> is the new trend.
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Spotlight effect is a great way to draw attention to a specific part
            of the page. Here, we are drawing the attention towards the text
            section of the page. I dont know why but Im running out of
            copy.
          </p>
        </div>
      </div> */}
      <div className="Image" >
        <section className="text-gray-600 body-font  min-h-[90vh] section">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <div className="flex justify-start">
                <Image alt="Description of the image" width={500} height={400} src="https://businessleadsworld.com/best-mca-leads/wp-content/uploads/2024/05/Untitled-design-2-1-1024x341.webp" className="h-24 " />
              </div>
              <h1 className="title-font sm:text-5xl text-3xl mb-4 font-bold text-white pt-20">Get the Best MCA
                <TypewriterEffectSmooth words={words} />
              </h1>
              <p className="mb-8 leading-relaxed text-white">Business Leads World specializes in connecting you with high-quality leads for Merchant Cash Advances (MCAs)  Business Loans  Live Transfers  and everything
                in between.</p>
              <div className="flex justify-center">
                <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 transition duration-300 hover:scale-105"
                >
                  Get Leads Now
                </Button>            </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <SignupFormDemo />
            </div>
          </div>
        </section>
      </div>
      <WhyChooseUs />
      <section className="bg-gray-800">
        <div className="container mx-auto flex px-5 pt-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <p className="mb-8 leading-relaxed text-yellow-500"> TELL US YOUR NEEDS WE ALL FIND THE BEST LEADS</p>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Boost Your Conversion Rates with Verified MCA Data</h1>
            <p className="mb-8 leading-relaxed text-white">Leads are screened for their current need for funding, ensuring you connect with borrowers actively seeking financing solutions.
              We adhere to all industry regulations and data privacy laws to deliver compliant and reliable leads.</p>
          </div>
        </div>
      </section>
      <div className="h-[13rem] flex flex-col antialiased bg-gray-800 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      <div className="h-[13rem] flex flex-col antialiased bg-gray-800 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
      <Consultation />
      <Stats />
      <section className="bg-white">
        <div className="container mx-auto flex px-5 pt-20 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <p className="mb-8 leading-relaxed font-bold text-blue-500"><FontAwesomeIcon icon={faCircleNotch} className='text-rose-700 mx-2' /> REAL BUSINESSES REAL RESULTS </p>
            <h1 className="title-font sm:text-5xl text-2xl mb-4 font-bold text-gray-800">What Our Clients Say About Us</h1>
            <p className="mb-8 leading-relaxed text-gray-500 px-10">Witness the success stories of everyday businesses just like yours thriving with our best MCA leads.</p>
          </div>
        </div>
      </section>
      <HoverEffect items={projects} />
      <Steps />
      <Footer />
    </>
  );
}


export default Home;
