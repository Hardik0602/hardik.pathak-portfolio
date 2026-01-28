import React, { useEffect, useState } from 'react'
const Loading = ({ onComplete }) => {
    const [text, setText] = useState('')
    const fullText = 'Welcome to my Portfolio!'
    useEffect(() => {
        let index = 0
        const interval = setInterval(() => {
            setText(fullText.substring(0, index))
            index++
            if (index > fullText.length) {
                clearInterval(interval)
                setTimeout(() => {
                    onComplete()
                }, 1000)
            }
        }, 100)
        return () => clearInterval(interval)
    }, [onComplete])
    return (
        <div className='fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center'>
            <div className='mb-4 text-2xl sm:text-3xl md:text-4xl font-mono font-bold px-4 text-center'>
                {text}<span className='animate-blink ml-1'>|</span>
            </div>
            <div className='w-50 h-0.5 bg-gray-800 rounded relative overflow-hidden'>
                <div className='w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar' />
            </div>
        </div>
    )
}
export default Loading