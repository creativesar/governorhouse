import React from 'react'
import Image from 'next/image'

const AdvnaceCourse = () => {
  return (
    <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-20 mb-10">
      <h1 className="lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-[#044E83] font-extrabold mt-10 pt-4 pl-12 font-roboto">
        Advanced Courses
      </h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 xl:gap-10 lg:gap-8 gap-5 p-12">
        {/* Artificial Intelligence */}
        <a className="hover:scale-105 duration-200 transition-all" href="/tracks/ai/4">
          <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold border border-gray-300 hover:shadow-md">
            <Image
              alt="Artificial Intelligence"
              loading="lazy"
              width="450"
              height="300"
              className="object-cover w-full"
              src="/images/a1.jpg"
            />
            <div className="flex justify-center items-center h-[70px] font-bold font-roboto">
              <span>Artificial Intelligence</span>
            </div>
          </div>
        </a>

        {/* Web 3 and Metaverse */}
        <a className="hover:scale-105 duration-200 transition-all" href="/tracks/wmd/4">
          <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold border border-gray-300 hover:shadow-md">
            <Image
              alt="Web 3 and Metaverse"
              loading="lazy"
              width="450"
              height="300"
              className="object-cover w-full"
              src="/images/a2.jpg"
            />
            <div className="flex justify-center items-center h-[70px] font-bold font-roboto">
              <span>Web 3 and Metaverse</span>
            </div>
          </div>
        </a>

        {/* Cloud-Native Computing */}
        <a className="hover:scale-105 duration-200 transition-all" href="/tracks/cnc/4">
          <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold border border-gray-300 hover:shadow-md">
            <Image
              alt="Cloud-Native Computing"
              loading="lazy"
              width="450"
              height="300"
              className="object-cover w-full"
              src="/images/a3.jpg"
            />
            <div className="flex justify-center items-center h-[70px] font-bold font-roboto">
              <span>Cloud-Native Computing</span>
            </div>
          </div>
        </a>

        {/* Ambient Computing and IoT */}
        <a className="hover:scale-105 duration-200 transition-all" href="/tracks/iot/4">
          <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold border border-gray-300 hover:shadow-md">
            <Image
              alt="Ambient Computing and IoT"
              loading="lazy"
              width="450"
              height="300"
              className="object-cover w-full"
              src="/images/a4.jpg"
              />
            <div className="flex justify-center items-center h-[70px] font-bold font-roboto">
              <span>Ambient Computing and IoT</span>
            </div>
          </div>
        </a>

        {/* Genomics and Bioinformatics */}
        <a className="hover:scale-105 duration-200 transition-all" href="/tracks/gbs/4">
          <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold border border-gray-300 hover:shadow-md">
            <Image
              alt="Genomics and Bioinformatics"
              loading="lazy"
              width="450"
              height="300"
              className="object-cover w-full"
              src="/images/a5.jpg"
            />
            <div className="flex justify-center items-center h-[70px] font-bold font-roboto">
              <span>Genomics and Bioinformatics</span>
            </div>
          </div>
        </a>

        {/* Network Programmability and Automation */}
        <a className="hover:scale-105 duration-200 transition-all" href="/tracks/npa/4">
          <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold border border-gray-300 hover:shadow-md">
            <Image
              alt="Network Programmability and Automation"
              loading="lazy"
              width="450"
              height="300"
              className="object-cover w-full"
              src="/images/a6.jpg"
            />
            <div className="flex justify-center items-center h-[70px] font-bold font-roboto">
              <span>Network Programmability and Automation</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default AdvnaceCourse
