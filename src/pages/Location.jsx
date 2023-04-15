import React from 'react'

const Location = () => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <h3 className='text-3xl text-black'> This is our physical store location</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29203.18990889592!2d90.42167740000001!3d23.80441605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7715a40c603%3A0xec01cd75f33139f5!2sBRAC%20University!5e0!3m2!1sen!2sbd!4v1681119917570!5m2!1sen!2sbd" width="600" height="450" loading="lazy" title='store location'></iframe>
        </div>
    )
}

export default Location