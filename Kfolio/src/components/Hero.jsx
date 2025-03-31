import profilePic from '../../../portfolio/public/images/photo_2025-01-04_09-26-48 rmc.png'

const Hero = () => {
    return (
      <div className='pb-4 lg:mb-36'>
        <div className='flex flex-wrap lg:flex-row-reverse'>
          <div className='w-full lg:w-1/2'>
            <div className='flex justify-center lg:justify-end lg:p-8'>
              <img src={profilePic} alt="Kisalay" className='rounded-3xl w-[75%]' />
            </div>
          </div>
          <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start mt-6'>
              <h2 className='pb-2 text-5xl font-bold tracking-tighter lg:text-6xl'>Kisalay Komal</h2>
              <span className='m-2 bg-gradient-to-r from-stone-300 to-slate-600 bg-clip-text text-4xl tracking-tight text-transparent'>
                Full Stack Developer
              </span>
              <div className="mt-7">
                <p className="text-gray-400 mb-6 text-justify">
                  Hi, I'm Kisalay Komal, a passionate software developer in my final year of B.E. in Computer Science and Engineering at Chandigarh University. I have honed my skills in languages such as C/C++, Java, Python, JavaScript, TypeScript, and MySQL. My core stack includes React, Node.js, and MySQL. I have a strong foundation in data structures, algorithms, and full-stack web development. With a passion for problem-solving and coding, I aim to build innovative and functional digital solutions. I am always eager to learn new technologies and am currently seeking a full-time position as a software developer.
                </p>
                <p className="text-gray-400 mb-6 text-justify flex">
                  When I'm not coding, I enjoy traveling, interacting with local people, writing & reciting poems. I also love spending time with my dog and indulging in watching movies. Currently, I am involving myself in Yoga & Meditation.
                </p>
              </div>
              <a href='/kisalayOverleaf.pdf' rel='noopener noreferrer' download className='bg-white rounded-full p-4 text-sm text-stone-800 mb-10 font-semibold transition hover:bg-gray-200  active:scale-90'>Download Resume</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Hero;