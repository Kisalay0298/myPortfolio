import React from 'react'
import {motion} from "motion/react";
import { skills } from '../../data/skills';
import SkillsBar from './SkillsBar';

const SkillsContent:React.FC =() => {
  return (
    <div className='p-6 max-w-4pxl mx-4'>
      <motion.h2
        initial={{opacity: 0, y: -20}}
        animate={{opacity: 1, y: 0}}
        className='text-2xl font-bold mb-6 capitalize'
      >
        skills & experties
      </motion.h2>

        {
            skills.map((skillGroup) => (
                <motion.div>
                    <h3 className='text-xl font-semibold my-10 mb-4 text-blue-400'>
                        {skillGroup.category}
                    </h3>
                    <div className="space-y-4">
                        {
                            skillGroup.items.map((skill, index) => (
                                <SkillsBar 
                                    key={skill.name}
                                    name={skill.name}
                                    level={skill.level}
                                    index={index}
                                />
                            ))
                        }
                    </div>
                </motion.div>
            ))
        }

    </div>
  )
}

export default SkillsContent