import React from "react";

const About = () => {
  return <>
    <div className="  container mx-auto flex justify-between items-center  py-4 p-10  grid md:grid-cols-2 lg-grid-cols-3 ">
      <div className="px-10">
        <h2 className="font-bold  text-5xl text-gray-800">25 YEAR'S OF <br /> EXPERIENCE</h2>
        <p className=" font-samibold text-gray-700 py-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro <br /> beatae error laborum ab amet sunt recusandae? Reiciendis <br /> natus perspiciatis optio.</p>
        <button className="bg-red-600 px-3 py-1 text-white font-samibold rounded-md">CONTACT US</button>
      </div>
      <div className="py-6">
        <img className="rounded-full" src="https://usd-service.vercel.app/static/media/why.460f042e8fbd8228c0cb.png" alt="" />
      </div>
    </div>
  </>

}

export default About