// import React,{useState} from 'react'
// import {motion} from "motion/react"
// import { Send } from 'lucide-react'


// const ContactForm:React.FC = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: ""
//     })
//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         // handle form-submittion logic here
//         console.log('Form submitted:', formData)
//     }
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         setFormData({
//             ...formData, 
//             [e.target.name]: e.target.value

//         });
//     }
//   return (
//     <motion.div
//         initial= {{ opacity: 0, y: 20 }}
//         animate= {{ opacity: 1, y: 0 }}
//         transition= {{ duration: 0.5 }}
//         onSubmit={handleSubmit}
//         className="space-y-6 bg-gray-800 rounded-lg p-6"
//     >
//       <div>
//         <label htmlFor="name" className="block text-sm font-medium mb-2">
//             Name
//         </label>
//         <input 
//             type="text" 
//             id="name" 
//             name='name'
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full px-3 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//             required
//         />
//         <label htmlFor="email" className="block text-sm font-medium mb-2">
//             Email
//         </label>
//         <input 
//             type="email" 
//             id="email" 
//             name='email'
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-3 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//             required
//         />
//       </div>
//       <div>
//         <label htmlFor="message" className="block text-sm font-medium mb-2">
//             Message
//         </label>
//         <textarea 
//             id="message" 
//             name='message'
//             value={formData.message}
//             onChange={handleChange}
//             rows={4}
//             className="w-full px-3 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//             required
//         />
//       </div>
//       <motion.button
//         whileHover = {{ scale: 1.02 }}
//         whileTap = {{ scale: 0.98 }}
//         type = "submit"
//         className = "w-full flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus-ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800">
//             <Send className='mr-2' size={18} />
//             Send Message
//       </motion.button>
//     </motion.div>
//   )
// }

// export default ContactForm

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 bg-gray-800 rounded-lg p-6"
        >
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        aria-label="Enter your name"
                        required
                    />
                </div>

                {/* Email Input */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        aria-label="Enter your email"
                        required
                    />
                </div>

                {/* Message Input */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={8}
                        className="w-full px-3 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        aria-label="Enter your message"
                        required
                    />
                </div>

                {/* Submit Button */}
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus-ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                    <Send className="mr-2" size={18} />
                    Send Message
                </motion.button>
            </form>
        </motion.div>
    );
};

export default ContactForm;
