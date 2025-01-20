import React, {useEffect} from 'react';
import { motion } from 'motion/react';
import recodImage from '/images/photo_2025-01-04_09-26-48 rmc.png'; // Adjust the path based on your folder structure
import { ExternalLink, Github,  Linkedin, Mail } from 'lucide-react'

const AboutContent: React.FC = () => {
  useEffect(() => {
    // Inject the first script
    const injectScript1 = document.createElement('script');
    injectScript1.src = 'https://cdn.botpress.cloud/webchat/v2.1/inject.js';
    injectScript1.async = true;
    document.body.appendChild(injectScript1);

    // Inject the second script
    const injectScript2 = document.createElement('script');
    injectScript2.src = 'https://mediafiles.botpress.cloud/9bd5dbdf-9910-45ee-8b93-1243923560d9/webchat/v2.1/config.js';
    injectScript2.async = true;
    document.body.appendChild(injectScript2);

    // Cleanup scripts on component unmount
    return () => {
      document.body.removeChild(injectScript1);
      document.body.removeChild(injectScript2);
    };
  }, []);
  return (
    <div className="p-6 max-w-4xl mx-auto">
  <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">About Me</h2>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-gray-800 rounded-lg p-6 flex flex-col lg:flex-row lg:items-center"
  >
    {/* Main Parent Div */}
    <div className="flex flex-col gap-4">
      
      {/* First Child Div */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:mr-6 mt-5 gap-3">
        {/* Image Section */}
        <div className="mb-4 lg:w-1/3 flex justify-center align-middle">
          <img
            className="w-full max-w-[200px] h-auto rounded-lg"
            src={recodImage}
            alt="About me illustration"
          />
        </div>
        
        {/* Paragraph Section */}
        <div className="lg:w-2/3">
          <p className="text-gray-300 mb-6 text-justify">
            Hi, I'm Kisalay Komal, a passionate software developer in my final year of B.E. in Computer Science and Engineering at Chandigarh University. I have honed my skills in languages such as C/C++, Java, Python, JavaScript, TypeScript and MySQL. My core stack includes React, Node.js and MySQL. I have a strong foundation in data structures, algorithms, and full-stack web development. With a passion for problem-solving and coding, I aim to build innovative and functional digital solutions. I am always eager to learn new technologies and am currently seeking a full-time position as a software developer.
          </p>
          <p className="text-gray-300 mb-6 text-justify flex">
            When I'm not coding, I enjoy traveling, interacting with local people, write & recite poems. I also love spending time with my dog and indulge in watching movies. Currently, I am involving myself in Yoga & Meditation.
          </p>
        </div>
      </div>
      
      {/* Second Child Div */}
      <div className='ml-5 mr-10'>
        <h3 className="text-xl font-semibold mb-3">Coding Experience</h3>
        <div className="border-l-2 border-blue-500 pl-4 flex align-middle">
          <div className='flex flex-col w-2/3'> 
            <h4 className="font-semibold">LeetCode</h4>
            <p className="text-gray-400">
              <ul>
                <li>
                  <a href="https://leetcode.com/u/Kisalay2767/" target='_blank' className='inline-flex items-center hover:text-blue-400'><ExternalLink className='mr-2 ' size={16} />View Profile</a>
                </li>
                <li>Attended 30+ Contests</li>
              </ul>
            </p>
          </div>
          <div className='flex'>  
            <p className="text-gray-300">
              Proficient in C++ with 2 years of experience solving diverse problems, demonstrating strong algorithmic thinking and efficient coding practices.
            </p>
          </div>
        </div>

        <div className="h-4"></div>
        <div className="h-4"></div>
        <div className="h-4"></div>

        {/* <h3 className='text-xl font-semibold mb-3'>Connect</h3> */}
        <div className="flex space-x-4 justify-center mb-4">
          <a 
            href="https://github.com/Kisalay0298"
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center text-gray-300 hover:text-blue-400'
          >
            <Github className='mr-2' size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/kisalay-komal-16125922b/"
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center text-gray-300 hover:text-blue-400'
          >
            <Linkedin className='mr-2' size={20} />
          </a>
          <a 
            href="mailto:kisalaykomal2767@gmail.com"
            className='flex items-center text-gray-300 hover:text-blue-400'
          >
            <Mail className='mr-2' size={20} />
          </a>
        </div>
      </div>
      
    </div>
  </motion.div>
</div>

  );
};

export default AboutContent;