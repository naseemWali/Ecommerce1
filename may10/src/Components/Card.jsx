import React from 'react';
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenLeg } from "react-icons/gi";
import {useDispatch} from 'react-redux'
import {increment} from '../Redux/counterSlice.js'

function Card({name,id,image,price,type}) {
    
    const dispatch=useDispatch()
    return (
        <div className='w-[250px] h-[300px] bg-white p-4 rounded-lg flex flex-col gap-2'>
        <div className='w-[100%] h-[50%] overflow-hidden rounded-lg'>
        <img src={image} alt="image1" className=' object-cover'/>
        </div>  

        <div className='font-extrabold'>
        <p>{name}</p>
        </div>

        <div className='flex justify-between text-emerald-600 w-full'>
            <div>Rs {price}/</div>
            <div className='flex items-center justify-center gap-2'>{type==='veg'?<LuLeafyGreen/>:<GiChickenLeg/>}<span>{type}</span></div>
        </div>
          
          <button className="w-full p-3 bg-emerald-200 rounded-lg text-black font-bold cursor-pointer hover:bg-black hover:text-white transition-all" onClick={()=>dispatch(increment({id:id,name:name,image:image,price:price,quantity:1}))}>Add to dish</button>
        </div>
    );
}

export default Card;