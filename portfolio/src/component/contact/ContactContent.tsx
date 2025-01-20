import React from 'react'
import {motion} from "motion/react"
import { Mail, MapPin, Phone } from 'lucide-react'
import ContactForm from './ContactForm'

const ContactContent:React.FC = () => {
  return (
    <div className='p-6 max-w-4xl mx-auto'>
      <motion.h2
        initial={{ opacity: 0, y: -2 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold mb-6"
      >
        Get in Touch
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
            <motion.div
                initial ={{ opacity: 0, x: -20 }}
                animate ={{ opacity: 1, x: 0 }}
                transition ={{ delay: 0.2 }}
                className='mb-8'
            >
                <div className='mt-9 mr-9'>
                    <p className='text-gray-300 mb-6 text-justify font-semibold'>
                        {/* I'm always eager to connect and collaborate! */}
                        {`"Happy to connect and collaborate with like-minded individuals!"`}
                    </p>
                    <p className='text-gray-300 mb-6 text-justify'>
                        Whether it's a new project, an open discussion, work opportunities or sharing suggestions, I’m genuinely passionate about technology and development.
                    </p>
                    <p className='text-gray-300 mb-6 text-justify'>
                        Feel free to reach out using the contact form or through any of the method below. Your ideas and insights are always welcome and I’d love to explore how we can create something meaningful together.
                    </p>
                </div>
                <div className="space-y-4 mt-10">
                    <div className="flex items-center text-gray-300">
                        <Mail className="w-6 h-6 mr-3 text-blue-400" size={20} />
                        <span>kisalaykomal2767@gmail.com</span>
                    </div>
                    {/* <div className="flex items-center text-gray-300">
                        <Instagram className="w-6 h-6 mr-3 text-blue-400" size={20} />
                        <span><a href="https://www.instagram.com/oye.its.dreamer.engineer/">into_tech_Dreamer</a></span>
                    </div> */}
                    <div className="flex items-center text-gray-300">
                        <Phone className="w-6 h-6 mr-3 text-blue-400" size={20} />
                        <span>+91 887 793 9393</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                        <MapPin className="w-6 h-6 mr-3 text-blue-400" size={20} />
                        <span>Mohali, Punjab</span>
                    </div>
                </div>
            </motion.div>
        </div>
        <motion.div
            initial ={{ opacity: 0, x: 20 }}
            animate ={{ opacity: 1, x: 0 }}
            transition ={{ delay: 0.3 }}
        >
            <ContactForm />
            {/* Contact form */}
        </motion.div>
      </div>
    </div>
  )
}

export default ContactContent
