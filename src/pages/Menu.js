import React from 'react'
import { useStateValue } from '../context/StateProvider';

const Menu = () => {
    const [{ foodItems, cartShow }, dispatch] = useStateValue();
    console.log(foodItems);
  return (
      <div>
          <h3>Our menu</h3>
          <div className='my-10 grid md:grid-cols-3 grid-cols-1 gap-5'>
          {foodItems?.map(elem=><div className="card w-96  shadow-xl">
  <div className="card-body">
    <div className="card-actions justify-end">
                  </div>
                  <img src={elem?.imageURL} alt='' />
    <p>{elem?.category}.</p>
  </div>
</div>)}
</div>
      </div>
  )
}

export default Menu