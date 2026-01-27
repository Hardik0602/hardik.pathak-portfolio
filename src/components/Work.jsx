import React from 'react'
const Work = ({ title='', description='' }) => {
    return (
        <div className='space-y-2'>
            <h4 className='font-extrabold'>{title}</h4>
            <p>{description}</p>
        </div>
    )
}
export default Work