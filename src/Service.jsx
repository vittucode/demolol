import React, { useState } from "react";
import { Link } from "react-router-dom"

const Service = () => {
    return (
        <>
        <div className="justify-center text-center py-10">
            <h2 className="text-3xl">Our Services</h2>
            <p className="text-gray-700 py-5">USD Services offers a variety of IT consulting and Digital Marketing services which are flexible, robust & reliable as per our client’s <br/> requirements. At Vcana, we believe in building brands rather than a just a company or a name. Following is the list of services that we provide to our clients.
            </p>
         </div>
         <div className="container mx-auto flex justify-center text-center mx-5 py-4 p-10 grid md:grid-cols-3 gap-5 rounded-md">
            {ServiceData.map((item,index) => {
                return (
              <div key={index}
              className={`bg-ye-300 border shadow-md justify-center text-center mx-5 py-10 px-10  ${item.class}`}
              >
                <img className=" " src={item.img} alt=""/>
                <h2 className="font-bold py-4 text-2xl">{item.title}</h2>
                <p className="py-6">{item.desc}</p>
                <Link 
                to={item.route}
                state={item}
                className=" bg-red-500 rounded-xl py-2 px-6 my-4 font-bold mb-3 "
                 >Read More
                </Link>
              </div>
                );
            })}

         </div>
        </>
    );
};

const ServiceData = [
 {
    img:"https://www.q5infotech.com/wp-content/uploads/2020/09/Web-Development.jpeg",
    title:"Web Development",
    desc:"website (also written as web site) is a collection of web pages and related content that is identified by a common domain name and published on at least one web server",
    route:"/servise-details",
    class:""
 },
 {
    img:"https://norsecorp.com/wp-content/uploads/2020/02/fleet-scaled.jpg",
    title:"Fleet Management",
    desc:"Fleet Management Companies Usa. ZapMeta Offers The Overview from 6 Engines.",
    route:"/servise-details",
 },
 {
    img:"https://www.cloudways.com/blog/wp-content/uploads/WordPress-Website-Hacked.jpg",
    title:"Hack Site",
    desc:"In this tutorial you will learn how to hack websites, and we will introduce you to web application hacking techniques and the counter measures.",
    route:"/servise-details",
 },
 {
    img:"https://www.blogtyrant.com/wp-content/uploads/2012/03/choose-best-blog-hosting.png",
    title:"Host",
    desc:"GigaPromo is the website to compare Best Cloud Hosting Services. Search and save now! Find the lowest price for Best Cloud Hosting Services today!",
    route:"/servise-details",
 },
 {
    img:"https://aufaitux.com/wp-content/uploads/2020/05/UIUX-designing-1.jpg",
    title:"Ui/UX Design",
    desc:"A user experience (UX) designer works on a team to create products the provide meaningful and enjoyable experiences for users.",
    route:"/servise-details",
 },
 {
    img:"https://limejuice.co.za/wp-content/uploads/2021/08/Lime-Juice-Website-Services-06.jpg",
    title:"Green USD",
    desc:"Graphic design is the practice of composing and arranging the visual elements of a project. Designing the layout of a magazine, creating a poster for a theatre performance,",
    route:"/servise-details",
 },
 {
    img:"https://techtradigital.com/wp-content/uploads/2020/04/2020-google-Ideas-to-Increase-Business-Sale-Through-Digital-Marketing.jpg",
    title:"Digital Marketing",
    desc:"At a high level, digital marketing refers to advertising delivered through digital channels such as search engines, websites, social media",
    route:"/servise-details",
 },
 {
    img:"https://www.w3care.com/images/uploads/services/logo-banner.png",
    title:"Logo Design",
    desc:"Know your brand personality. You should have a clear idea of the brand personality you want to convey before you start designing a company logor",
    route:"/servise-details",
 },

 
]


export default Service;