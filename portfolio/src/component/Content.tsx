import { projects } from '../data/project'
import React from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'motion/react'
import AboutContent from './about/Aboutontent'
import SkillsContent from './skills/SkillsContent'
import ContactContent from './contact/contactContent'

const Content: React.FC <{ activeTab: string }> = ({activeTab}) => {

    const contentVariant = {
        hidden: {opacity: 0, x: -20},
        visible: {opacity: 1, x: 20}
    }

    const renderProject = () => (
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12 p-6 flex-auto mr-12'>
      {
        // This is where you would put your data
        projects.map((project, index) => (
            <motion.div 
            key={project.title}
            initial="hidden"
            animate="visible"
            variants={contentVariant}
            transition={{delay: index * 0.1}}
            className='bg-gray-800 rounded-lg overflow-hidden flex flex-col'>
                <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-48 object-cover'
                />
                <div className="p-4 flex flex-col flex-grow">
                    <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech)=>(
                            <span 
                            key={tech}
                            className='px-2 py-1 bg-gray-700 rounded-md text-sm'>
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-4 mt-auto">
                        {
                            project.githubUrl && (
                                <a 
                                href={project.githubUrl}
                                target='_blank'
                                rel="noopener noreferrer"
                                className='flex items-center text-gray-300 hover:text-blue-400'
                                >
                                    <Github className='mr-1' size={16} />Code
                                </a>
                            )
                        }
                        {
                            project.liveUrl && (
                                <a 
                                href={project.liveUrl}
                                target='_blank'
                                rel="noopener noreferrer"
                                className='flex items-center text-gray-300 hover:text-blue-400'
                                >
                                    <ExternalLink className='mr-1' size={16} />Live Demo
                                </a>
                            )
                        }
                    </div>
                </div>
            </motion.div>
        ))
      }
    </div>
    )

    const renderContent = () => {
        switch(activeTab){
            case 'Projects':
                return renderProject();
            case 'skills':
                return <SkillsContent />;
            case 'about':
                return <AboutContent />;
            case 'contact':
                return <ContactContent />;
            default:
                break;
        }
    }

  return (
    <motion.div 
    initial= 'hidden'
    animate='visible'
    variants={contentVariant}

    className='flex-1 overflow-auto bg-gray-900 text-gray-100'>
        {renderContent()}
    </motion.div>
  )
}

export default Content
