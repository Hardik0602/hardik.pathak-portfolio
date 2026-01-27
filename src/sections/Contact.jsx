import React, { useState } from 'react'
import RevealOnScroll from '../components/RevealOnScroll'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      toast.success('Message Sent')
      setFormData({
        name: '',
        email: '',
        message: ''
      })
    } catch (error) {
      console.log(error)
      toast.error('Error Sending Message')
    }
  }
  return (
    <section
      id='contact'
      className='min-h-screen flex items-center justify-center py-20'>
      <RevealOnScroll>
        <div className='px-4 w-150'>
          <h2 className='text-5xl mg:text-7zl font-black mb-6 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right text-center'>Get in Touch</h2>
          <form
            onSubmit={handleSubmit}
            className='space-y-6'>
            <div className='relative'>
              <input
                type='text' id='name' name='name' placeholder='Name' required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' />
            </div>
            <div className='relative'>
              <input
                type='email' id='email' name='email' placeholder='name@email.com' required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' />
            </div>
            <div className='relative'>
              <textarea
                id='message' name='message' placeholder='Message' required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' />
            </div>
            <button
              type='submit'
              className='w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] cursor-pointer'>
              Submit
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  )
}
export default Contact