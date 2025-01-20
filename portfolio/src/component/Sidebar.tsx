import {Code, File, Github, Linkedin, Mail, User} from "lucide-react"
import React from 'react'
import {motion} from 'motion/react'
// since we added activeTab so we need to attach the line
interface SidebarProps{
    activeTab: string,
    setActiveTab: (tab: string) => void
}

const Sidebar: React.FC<SidebarProps> =({activeTab, setActiveTab}) => {
    const SidebarIcons = [
        {icon: <File size={24} />, id: "Projects", label: "Projects"},
        {icon: <Code size={24} />, id: "skills", label: "Skills"},
        {icon: <User size={24} />, id: "about", label: "About"},
        {icon: <Mail size={24} />, id: "contact", label: "Contact"}
    ]
  return (
    <div className='w-16 bg-gray-900 h-screen flex flex-col items-center py-4'>
      {//since its an object so maybe dont know
        SidebarIcons.map((item) => (
            <motion.button 
                key={item.id}
                whileHover={{scale: 1.2}}
                whileTap={{scale: 0.9}}
                onClick={ () => setActiveTab(item.id)}
                className={`p-3 mb-2 rounded-lg ${activeTab === item.id ? 'bg-blue-600 text-white': "text-gray-400 hover:text-white"}`}
                >
                    {item.icon}
            </motion.button>
        ))
      }

      <div className="mt-auto">
        <motion.a
        href="https://github.com/Kisalay0298"
        target="blank"
        rel="noopener noreferrer"
        whileHover={{scale: 1.2}}
        className="p-3 text-gray-400 hover:text-white block mb-2"
        >
            <Github size={24} />
        </motion.a>

        <motion.a
        href="https://www.linkedin.com/in/kisalay-komal-16125922b/"
        target="blank"
        rel="noopener noreferrer"
        whileHover={{scale: 1.2}}
        className="p-3 text-gray-400 hover:text-white block mb-2"
        >
            <Linkedin size={24} />
        </motion.a>
      </div>
    </div>
  )
}

export default Sidebar
