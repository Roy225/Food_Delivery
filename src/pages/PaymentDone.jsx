import React from 'react'

import Confetti from 'react-confetti'
const PaymentDone = () => {
    return (
        <div className=' flex justify-center items-center h-[60vh]'>
            <p>Congratulations !! Your payment is done</p>
            <Confetti />
        </div>
    )
}

export default PaymentDone