import { MdFastfood } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa6";
import { useContext } from "react";
import { dataContext } from "../Context/UserContext";
import {useEffect} from 'react'
import {food_items} from '../Food.js'
import { useSelector } from "react-redux";
function Nav() {
    let {input ,setInput,setCat,setShow}=useContext(dataContext)
    useEffect(()=>{
    let a=food_items.filter((items)=>items.food_name.toLowerCase().includes(input.toLowerCase()))
    setCat(a)
    },[input,setCat])
    
   const selector=useSelector(state=>state.counter)

    return (
        <div className='w-full h-[80px]  bg-emerald-100 flex justify-between items-center md:px-5 px-8'>
            <div className="w-[60px] h-[60px] bg-white flex items-center justify-center shadow-lg rounded-md">
             <MdFastfood className="w-[20px] h-[20px] text-emerald-400"/>
            </div>

            <form  className="bg-white md:w-[80%]  w-[50%] h-[60px] rounded-md flex items-center gap-5 px-5 shadow-lg" onSubmit={(e)=>e.preventDefault()}>
             <CiSearch className="md:w-[20px] md:h-[20px] text-emerald-400 h-[18px] w-[18px]"/>
             <input type="text"  placeholder="Search Items" className="w-[100%] outline-none  text-black font-semibold font-serif text-[16px] md:text-[19px]" onChange={(e)=>setInput(e.target.value)}/>
            </form>

             <div className="w-[60px] h-[60px] bg-white flex items-center justify-center shadow-md relative cursor-pointer" onClick={()=>setShow(true)}>
                <span className="absolute top-0 text-md right-4 text-emerald-600">{selector.length}</span>
             <FaCartPlus className="w-[20px] h-[20px] text-emerald-400"/>
            </div>

        </div>
    );
}

export default Nav;