import { ImBin } from "react-icons/im";
import {Delete} from '../Redux/counterSlice.js'
import { useDispatch } from "react-redux";

function Card2  ({id,name,price,image,quantity})  {
    const dispatch=useDispatch()

    return (
        <div className='w-full h-[120px] p-2 flex shadow-xl rounded-sm justify-between'>
        <div className='w-[60%] h-full flex gap-5'>
        <div className='w-[50%] h-full overflow-hidden'>
        <img src={image} alt='fruit' className='object-cover rounded-lg'/>
        </div>
            
            {/* add width from w-[40%] to 60% */}
           <div className='w-[60%] h-full flex flex-col'> 
           <div className=' text-sm md:text-lg text-emerald-600 font-serif'>{name}</div>
           <div className='w-[full] bg-white h-[50px] flex shadow-lg hover:border-2 border-emerald-400 hover:transition-all'>
            <button className='w-[30%] h-full  flex justify-center items-center'>-</button>
            <span className='w-[40%] h-full bg-slate-300 flex justify-center items-center'>{quantity}</span>
            <button className='w-[30%] h-full  flex justify-center items-center'>+</button>
           </div>
           </div>
           </div>

           <div className='flex flex-col items-end justify-start gap-6'>  
            <span className='text-emerald-600 font-serif'>Rs/{price}-</span>
           <ImBin className='text-emerald-800 cursor-pointer' onClick={()=>dispatch(Delete(id))}/>
          </div>
          </div>
    );
};

export default Card2;