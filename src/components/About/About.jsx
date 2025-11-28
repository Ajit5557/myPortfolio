import React from 'react'
import profileImage from '../../assets/ajitProfilePic.png';
const About = () => {
  return (
    <section id="about" className='py-4 px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'> 

      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>

        {/* Left Side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
        {/* Greeting */}
        <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
          Hi, I am
        </h1>
        {/* Name */}
        <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>Ajit Chauhan</h2>

        {/* Skills heading with typing effect */}

        {/* About me paragraph */}
        <p className='text-white font-bold'>I am a Full-Stack Developer | MERN Stack & DevOps. </p>
        <p className='text-gray-400 text-base sm:text-lg md:text-lg mb-10 mt-8 leading relaxed'>
          I create web applications with modern technologies, focusing on seamless user experiences and efficient solutions. My projects showcase my skills in both front-end and back-end development.
        </p>

        {/* Resume Button */}
        <a href="https://drive.google.com/file/d/1SdN8rMPp2K02YW_PUPu3OJ4uuj1Ve8-u/view?usp=drive_link" target='_blank' rel='noopener noreferrer' className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform:hover-scale-105'
        style={{
          background:'linear-gradient(90deg, #8245ec, #a855f7)',
          boxShadow:'0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec'
        }}>DOWNLOAD CV</a>
        
        </div>

        {/* Right Side */}
        <div className='md-w-1/2 flex justify-center md:justify-end'>
          <img src={profileImage} alt="Ajit Chauhan" className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]' />
        </div>

      </div>
    </section>
  )
}

export default About