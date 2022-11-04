import React from 'react';


const Footer = () => {
    return (<>

        <div className='bg-blue-900'>
            <div className='container mx-auto flex justify-between items-center gap-10 py-12 text-white py-6 p-6 grid md:grid-cols-2 lg:grid-cols-3'>
                <div className=' px-'>
                    <h2 className='font-bold text-xl'>NEWSLETTER</h2>
                    <p className='py-4'>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Corporis, cum.</p>
                    <label htmlFor="Email Goes Here"> Email Goes Here</label><br />
                    <div className='py-4'>
                        <hr />
                    </div>
                </div>
                <div className=' gap-2'>
                    <h2 className='font-bold text-xl py-4'>HELPFULL LINKS</h2>
                    <div className=' '>
                        <p className='text-sm hover:text-blue-400 py-1'>Term Of Use</p>
                        <p className='text-sm hover:text-blue-400 py-1'>Privacy Policy</p>
                        <p className='text-sm hover:text-blue-400 py-1'>Cookies</p>
                        <p className='text-sm hover:text-blue-400 py-1'>Help</p>
                        <p className='text-sm hover:text-blue-400 py-1'>FAQ'S</p>
                    </div>
                </div>
                <div className=''>
                    <h2 className='font-bold text-xl'>OUR HEAD OFFICE</h2>
                    <p className='py-4'> Services , Hadapsar , Pune , <br />
                        Maharashatra, India- 412308</p>
                    <p>+91-7588223343</p>
                    <p>helpdesk@usdservices.in</p>
                </div>



            </div>

        </div>

        <div className='bg-blue-900 text-white '>
            <div className=' container mx-auto'>
            <hr />
            <h2 className='py-4 text-sm mb-4'>© 2022USD SERVICES,All Rights Reserved</h2>
            </div>
        </div>



    </>

    );
};

export default Footer