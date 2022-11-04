import React from "react";

const Hero = () => {
    return (<>

        <div className="container mx-auto justify-between items-center flex  gap-2 h-full  py-4 p-10  grid md:grid-cols-2 lg-grid-cols-3 ">
            <div className=" px-12">
                <h2 className="bg-gray-200 rounded-md w-1/3 px-2 font-bold">BRAND NEW</h2>
                <h1 className="font-bold text-4xl py-2">Everything you <br />
                    can imagine is real</h1>
                <p className="text-gray-800 py-5 text-xl">Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptatem accusantium doloremque laudantium, <br /> totam rem aperiam, eaque ipsa quae. explicabo.</p>
                <div className="">
                    <button className="bg-red-500 py-3 px-6 font-samibold text-white">Get started</button>
                    <button className="font-bold px-5">Learn more</button>
                </div>

            </div>
            <div className=" ">
                <img src="https://i0.wp.com/juntrax.com/blog/wp-content/uploads/2022/09/empsatisfaction.jpg?fit=940%2C788&ssl=1" alt="managment" />
            </div>
        </div>
        <div className="bg-purple-500">
            <div className="container mx-auto justify-center items-center py-10 flex gap-4 px-10  grid-cols-2 grid md:grid-cols-3 lg:grid-cols-4">
                <div className=" text-white font-bold border rounded-md ">
                    <div className="flex items-center py-2 px-6 ">
                        <img src="https://ik.imagekit.io/nboj7z3sl/WOrk_KKXdZU85E.png" alt="brifcase" />
                        <span className="py-20 px-2 text-3xl">13+</span>
                    </div>
                    <h2 className="text-center mb-10">Years in Business</h2>
                </div>

                <div className=" text-white font-bold border rounded-md ">
                    <div className="flex items-center py-2 px-6">
                        <img src="https://ik.imagekit.io/nboj7z3sl/happy_kyWqTo0Gz.png" alt="brifcase" />
                        <span className="py-20 px-2 text-3xl">300+</span>
                    </div>
                    <h2 className="text-center mb-10">Happy Clients</h2>
                </div>

                <div className=" text-white font-bold border rounded-md ">
                    <div className="flex items-center py-2 px-6 ">
                        <img src="https://ik.imagekit.io/nboj7z3sl/team_d1CnUPCwW.png" alt="brifcase" />
                        <span className="py-20 px-2 text-3xl">40+</span>
                    </div>
                    <h2 className="text-center mb-10">Technical Experts</h2>
                </div>

                <div className=" text-white font-bold border rounded-md ">
                    <div className="flex items-center py-2 px-6 ">
                        <img src="https://ik.imagekit.io/nboj7z3sl/satisfication_MqDtbjle4b.png" alt="brifcase" />
                        <span className="py-20 px-2 text-3xl ">130+</span>
                    </div>
                    <h2 className="text-center mb-10">Apps Delivered</h2>
                </div>
            </div>
        </div>



    </>

    );
};

export default Hero
