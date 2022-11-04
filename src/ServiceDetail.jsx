   import React from "react";
   import {useLocation} from "react-router-dom"
   
   
   const ServiceData = () => {
    const location = useLocation();
    const data = location.state;
    console.log(data)
    return (
    <>
    <section>
        <h2 className="text-7xl">{data.title}</h2>
        <p>{data.desc}</p>
        <img src={data.img} alt=""/>
    </section>
    </>
    );
};

export default ServiceData;