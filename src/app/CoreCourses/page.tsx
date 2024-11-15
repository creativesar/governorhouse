import React from 'react'
import Image from 'next/image'

const Core = () => {
  return (
    <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-10 mb-10">
      <h1 className="lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-[#044E83] font-extrabold mt-10 pl-12 pt-4 font-roboto">
        Core Courses Sequence
      </h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 xl:gap-10 lg:gap-8 gap-5 mt-10 px-12">
        <a className="hover:scale-105 duration-200 transition-all" href="/compulsory/1">
          <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold border border-gray-300 hover:shadow-md">
            <Image 
              alt="Programming Fundamentals" 
              loading="lazy" 
              width="450" 
              height="300" 
              className="object-cover w-full" 
              src="/images/one.jpg" 
            />
            <div className="px-4 flex justify-center items-center h-[70px] font-bold font-roboto">
              <span>Programming Fundamentals</span>
            </div>
          </div>
        </a>
        <a className="hover:scale-105 duration-200 transition-all" href="/compulsory/2">
          <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold border border-gray-300 hover:shadow-md">
            <Image 
              alt="NextJS" 
              loading="lazy" 
              width="450" 
              height="300" 
              className="object-cover w-full" 
              src="/images/two.jpg" 
            />
            <div className="px-4 flex justify-center items-center h-[70px] font-bold font-roboto">
              <span>Web2 Using NextJS</span>
            </div>
          </div>
        </a>
        <a className="hover:scale-105 duration-200 transition-all" href="/compulsory/3">
          <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold border border-gray-300 hover:shadow-md">
            <Image 
              alt="Earn as You Learn" 
              loading="lazy" 
              width="450" 
              height="300" 
              className="object-cover w-full" 
              src="/images/three.jpg" 
            />
            <div className="px-4 flex justify-center items-center h-[70px] font-bold font-roboto">
              <span>Earn as You Learn</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Core
