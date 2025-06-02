import { IoMdHome } from "react-icons/io";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import { LuPizza } from "react-icons/lu";
import { GiHamburger } from "react-icons/gi";
import { GiChickenOven } from "react-icons/gi";


 const Categories=[
    {
     id:1,
     name:'All',
     icon:<IoMdHome className="w-[30px] h-[30px] text-emerald-700"/>
    },

    {
     id:2,
     name:'breakfast',
     icon:<MdOutlineFreeBreakfast className="w-[30px] h-[30px] text-emerald-700"/>
    },

     {
     id:3,
     name:'soups',
     icon:<LuSoup className="w-[30px] h-[30px] text-emerald-700"/>
    },

     {
     id:4,
     name:'pasta',
     icon:<CiBowlNoodles className="w-[30px] h-[30px] text-emerald-700"/>
    },

     {
     id:5,
     name:'pizza',
     icon:<LuPizza className="w-[30px] h-[30px] text-emerald-700"/>
    },

    {
     id:6,
     name:'burger',
     icon:<GiHamburger className="w-[30px] h-[30px] text-emerald-700"/>
    },

    {
     id:7,
     name:'main_course',
     icon:<GiChickenOven className="w-[30px] h-[30px] text-emerald-700"/>  
    }
]

export default Categories;