import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb, SiExpress, SiMysql, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiNodedotjs, SiPhp, SiPython, SiCplusplus, SiGit } from 'react-icons/si';

const techStack = [
  { name: 'React', icon: <RiReactjsLine className="text-cyan-400" /> },
  { name: 'Next.js', icon: <TbBrandNextjs className="text-white" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-400" /> },
  { name: 'HTML', icon: <SiHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <SiCss3 className="text-blue-500" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-500" /> },
  { name: 'PHP', icon: <SiPhp className="text-indigo-500" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
  { name: 'Python', icon: <SiPython className="text-yellow-400" /> },
  { name: 'C++', icon: <SiCplusplus className="text-blue-400" /> },
  { name: 'Git', icon: <SiGit className="text-red-600" /> },
];

const Technologies = () => {
  return (
    <div className='pt-16 pb-8 rounded-4xl bg-gray-900 text-white '>
      <h2 className='mb-12 text-center text-5xl font-bold'>Technologies</h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-6'>
        {techStack.map((tech, index) => (
          <div key={index} className='flex flex-col items-center bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer'>
            <div className='text-6xl'>{tech.icon}</div>
            <p className='mt-3 text-lg font-medium'>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;