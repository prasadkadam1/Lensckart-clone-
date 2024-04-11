import React from 'react'

const Footer = () => {
    return (
        <div className='mt-10'>
            <main className='h-[460px] w-[100%] bg-[#FFF092]'>
                <section className='font-semibold text-3xl text-center pt-7  '>MEET OUR HAPPY CUSTOMERS</section>
                <section className='flex justify-around mt-16'>
                    <iframe width="414" height="276" src="https://www.youtube.com/embed/HYPqf_eVvvM" title="Customer Reviews" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe width="455" height="276" src="https://www.youtube.com/embed/SQm3RxXRunw" title="Lenskart Customer Testimonial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe width="414" height="276" src="https://www.youtube.com/embed/IZpUQ-S_LcM" title="Lenskart - The Customer Diaries - Anurag" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </section>
                <section className='h-[650px] bg-[#000041] w-[100%]  p-12 mt-10'>
                    <h1 className='text-white text-4xl'>Buy The Best Eyewear From Lenskart</h1>
                    <p className='text-white p-5'>Lenskart Is The Leading E-Commerce Portal For Eyewear In India. It Has Revolutionised The Eyewear Industry In The Country With Its Omni-Channel Approach. From An Ever-Growing Number Of Offline Stores Across Major Cities In The Country To Innovative Integration Of Technology While Purchasing Online, Lenskart Caters To Every Customer With Several Deals And Offers.</p>
                    <p className='text-white p-5'>A One-Stop Online Solution For Purchasing Eyewear And Its Accessories, Lenskart Delivers Them Right At Your Doorstep With Convenient Methods Of Payment. Sunglasses as well as Eyeglasses Are Available For Men And Women In A Diverse Array Of Styles And Trendy Colours. If You Want To Try Out Contact Lenses, Pick The Ones Of Your Choice From The Extensive Variety Of Coloured Contact Lenses From Our Online Store.</p>
                    <article>
                    <section className='text-white w-[50%] flex justify-between p-10'>
                        <main className='h-[240px] flex justify-around flex-col'>
                            <h1>Services</h1>
                            <p>Store Locator</p>
                            <p>Buying Guide</p>
                            <p>Frame Size</p>
                        </main>npm run dev
                        <main className='h-[240px] flex justify-around flex-col'>
                            <h1>About Us</h1>
                            <p>We Are Hiring</p>
                            <p>Refer And Earn</p>
                            <p>About us</p>
                            <p>Lenskart Coupons</p>
                        </main>
                        <main className='h-[100px] flex justify-around flex-col'>
                            <h1>Help</h1>
                            <p>FAQ's</p>
                        </main>
                    </section>
                    </article>
                </section>
            </main>
        </div>
    )
}

export default Footer