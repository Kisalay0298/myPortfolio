import React from 'react'
import {motion} from 'motion/react'

interface SkillsBarProps{
    name: string;
    level: number;
    index: number;
}

const SkillsBar: React.FC <SkillsBarProps> = ({name, level, index}) => {
  return (
    <div className='mb-4 mr-10'>
        <div className='flex justify-between'>
            <span className='text-sm font-medium text-gray-300'>{name}</span>
            <span className='text-sm font-medium text-gray-300'>{level}</span>
        </div>
        <motion.div
            initial={{ width: 0 }}
            animate={{width: "100%" }}
            transition={{ duration: 0.5, delay: index * 0.1}}
            className='h-2.5 bg-gray-700 rounded-full'
        >
        <motion.div
            initial={{ width: 0 }}
            animate={{width: `${level}%` }}
            transition={{ duration: 0.5, delay: index * 0.1}}
            className='h-2.5 bg-blue-500 rounded-full'
        />
        </motion.div>
    </div>
  )
}

export default SkillsBar
