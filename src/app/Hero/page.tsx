import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div>
      {/* Background image container */}
      <div className="relative z-0 w-full overflow-hidden bg-opacity-75 bg-[url('/images/governorhouse.jpg')] bg-cover bg-center h-[720px]">
        <div className="absolute inset-0 h-full w-full bg-zinc-100 bg-opacity-80"></div>

        {/* Content section */}
        <div className="relative z-10 m-auto mt-6 block w-[95%] items-center justify-between md:flex md:flex-row lg:w-[90%] xl:w-[1300px]">
          {/* Text section */}
          <div className="h-fit w-full pt-5 md:w-1/2 md:py-10 pl-12 text-right">
            <h1 className="whitespace-nowrap text-[2rem] font-extrabold leading-10 tracking-wider text-[#044E83] sm:text-5xl sm:leading-none md:text-left lg:text-6xl">
              Governor Sindh
            </h1>
            <h1 className="whitespace-nowrap text-[1.5rem] font-normal leading-[2rem] tracking-wider text-[#044E83] sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem]">
              Kamran Khan Tessori
            </h1>
            <h1 className="mt-5 whitespace-nowrap text-[#2EB6E8] text-[1.5rem] leading-[2rem] tracking-wider sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem] font-bold">
              Certified Cloud<br />Applied Generative AI<br />Engineer (GenEng)
            </h1>
            <p className="my-5 whitespace-nowrap text-[1.25rem] font-extrabold text-[#044E83] sm:text-2xl md:text-left">
              Earn up to $5,000 / month
            </p>
            <p className="my-5 w-full text-[1.25rem] text-center font-bold tracking-wider text-[#044E83] sm:text-2xl md:w-[80%] md:text-left">
              Now admissions are open in <br /> Hyderabad
            </p>

            {/* Buttons and statistics */}
            <div className="mb-7 mt-5 flex flex-col items-center sm:mt-10 sm:flex-row sm:gap-5 md:mb-0">
              <a className="w-full md:w-auto" href="/apply">
                <button className="w-full rounded-md bg-[#044E83] py-3 text-center text-sm font-semibold tracking-widest text-white transition-all hover:translate-y-1 sm:py-4 sm:text-base md:w-52">
                  APPLY NOW
                </button>
              </a>
              <div className="mt-4 flex w-full flex-col items-center sm:mt-0">
                <div className="flex-col text-center text-xl tracking-widest text-[#044E83] sm:text-3xl">
                  <div className="w-40 font-extrabold">562,143</div>
                </div>
                <div className="text-center text-xs tracking-wider text-[#044E83] sm:mb-0 sm:text-sm font-extrabold">
                  Accepted Applications
                </div>
              </div>
            </div>
          </div>

          {/* Image section */}
          <div className="relative mt-7 flex w-full items-end justify-center md:m-auto md:justify-around">
            <Image
              alt="piaic"
              loading="lazy"
              width={1600}
              height={1212}
              className="md:ml-40 h-auto max-w-[900px] lg:w-[900px]"
              style={{ color: 'transparent' }}
              src="/images/governor.png"
            />
          </div>
        </div>
      </div>

      {/* Border line section */}
      <div className="xl:w-[1280px] lg:w-[90%] w-[95%] m-auto sm:mt-20 mt-10 pb-10"></div>

      {/* Additional Text and Information */}
      <h1 className="text-center xl:text-[32px] sm:text-[28px] text-xl sm:leading-[2.5rem] leading-[1.75rem] text-[#044E83] font-extrabold m-auto md:w-[95%] font-roboto">
        Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs
      </h1>

      <p className="sm:mt-10 mt-7 mb-8 xl:text-[1.25rem] sm:text-[1.2rem] text-[1rem] text-zinc-800 sm:tracking-wider tracking-normal text-justify px-12 font-regular font-roboto">
        The pace of technological change is accelerating, with big players like Microsoft, Amazon, Google, and OpenAI winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, directly connecting with customers, eliminating the middleman, and developing vertical metaverses. This program has the objective to train this new breed of billion-dollar solopreneurs, adopting ultra-lean business models while working independently without hiring employees or team members.
      </p>

      {/* Image Grid Section */}
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-5 mt-10 m-3 sm:m-0 px-12 font-bold font-roboto">
        <img
          alt="solo1"
          loading="lazy"
          width="1088"
          height="896"
          decoding="async"
          className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full"
          src="/images/imageone.jpg"
        />
        <img
          alt="solo2"
          loading="lazy"
          width="500"
          height="375"
          decoding="async"
          className="shadow-2xl shadow-black rounded-lg h-[300px] w-full"
          src="/images/imagetwo.jpg"
        />
        <img
          alt="solo3"
          loading="lazy"
          width="1088"
          height="896"
          decoding="async"
          className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full"
          src="/images/imagethree.jpg"
        />
      </div>
    </div>
  );
};

export default Hero;
