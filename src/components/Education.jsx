import React from 'react'
const Education = ({ degree = '', coursework = '' }) => {
    return (
        <div className='space-y-2'>
            <h4 className='font-extrabold'>{degree}</h4>
            <p>{coursework}</p>
        </div>
    )
}
export default Education