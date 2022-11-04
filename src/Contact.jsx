import React from "react";
import { IoLocationOutline } from 'react-icons/io'

const Contact = () => {
    return <>
        <div className="container mx-auto flex justify-center items-center gap-20  py-4 md:p-10  grid md:grid-cols-2 lg-grid-cols-3">
            <div>
                <h2 className="font-bold text-2xl md:text-3xl">GET IN TOUCH WITH US</h2>
                <p className=" text-gray-500 py-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius <br /> tempor incididunt ut labore et dolore magna aliqua.</p>
                <div>

                    <div>
                        <div>
                        </div>

                        <h1 className="font-bold text-2xl">Our Head Office</h1>
                        <p>USD Services , Hadapsar , Pune ,<br />  Maharashatra, India- 412308</p>
                    </div>

                    <div className="py-4">
                        <img src="IoLocationOutline" alt="" />
                    </div>
                    <div>
                        <h1 className="font-bold text-2xl">Call for Help</h1>
                        <p>+91-7588223343</p>
                    </div>

                    <div className="py-4">
                        <img src="IoLocationOutline" alt="" />
                    </div>
                    <div>
                        <h1 className="font-bold text-2xl">Email for Information</h1>
                        <p>usdservices@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className = "border rounded-md shadow px-10 py-10 mb-6">
                <div className="w-full py-3  border rounded-md px-3 mb-6" >
                    <input type="text" placeholder="Your Name"  />
                </div>
                <div className="w-full py-3  border rounded-md px-3 mb-6">
                    <input type="text" placeholder="Your Number" className="{}" />
                </div>
                <div className="w-full py-3  border rounded-md px-3 mb-6">
                    <input type="text" placeholder="Your Email" className="{}" />
                </div>
                <select className="w-full py-3 outline-none border rounded-md px-3 mb-6 lg:flex">
                    <option value={""}>--Select Service--</option>
                    <option value={""}>Web Development</option>
                    <option value={""}>App Development</option>
                    <option value={""}>SEO</option>
                    <option value={""}>SMM</option>
                </select>
                <div>
                    <button className="bg-red-600 py-3 px-44 text-white font-semibold ">Send Message</button>
                </div>

            </div>

        </div>

    </>
};

export default Contact
    