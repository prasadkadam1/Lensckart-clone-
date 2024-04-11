import React from 'react'
import Navbar from './Navbar'
import SecondarNavbar from './Navbar/SecondarNavbar';
import LensCategory from './lensCategory/LensCategory';
import DoMoreBeMore from './lensCategory/DoMoreBeMore';
import PremiumEyeware from './lensCategory/PremiumEyeware';
import Footer from './lensCategory/Footer';

const App = () => {
  return (
    <div>
      <div className='fixed w-[100%]'>
        <Navbar />
        <SecondarNavbar />
      </div>
      <LensCategory />
      <DoMoreBeMore />
      <PremiumEyeware />
      <Footer />
    </div>
  )
}

export default App