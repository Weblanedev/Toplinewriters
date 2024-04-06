import React from 'react'
import "./About.css";
import guywithcap from "../../../public/guywithcap.jpg"
import ebony from "../../assets/ebony.jpg";

function Aboutus() {
    return (
      <>
      <div className='About-us'>
        <div className='aboutus-wrappper'>
  <main className='first-half'>
    <div className='first-half-image'>
    <img src={guywithcap} alt="" />
    </div>
    <div className='first-half-text'>
      <span className='first-half-header'>About Topliners</span>
      <span className='first-half-content-text'>We are passionate about creating compelling content that captivates, informs, and inspires. With a team of experienced writers and editors, we specialize in crafting high-quality articles, blog posts, website content, and more, tailored to meet the unique needs of our clients.
      What sets us apart is our dedication to understanding our clients' objectives and delivering content that exceeds their expectations. Whether you're a small business looking to boost your online presence or a large corporation seeking engaging marketing materials, we have the expertise and creativity to bring your vision to life.
  </span>
    </div>
  </main>
  <main className='second-half'>
    <div className='second-half-text'>
      <span className='second-half-text-header'>What’s In Store For The Future?</span>
      <span className='second-half-text-content'>As we look ahead to the future, Topliners Writers is poised for exciting opportunities and growth. At Topliners Writers, the future is brimming with possibilities. We are excited to embark on this journey of growth and transformation, guided by our core values and a shared vision of success. Join us as we shape the future of content creation and digital marketing together. </span>
    </div>
    <div className='second-half-image'>
    <img src={ebony} alt="" />
    </div>
  </main>
  </div>
   {/* <Footer/>  */}
      </div>
      </>
    )
  }
  
  export default Aboutus