
import  React  from 'react';
import Categories from '../Category.jsx';
import Card from '../Components/Card.jsx';
import Nav from '../Components/Nav.jsx';
import { food_items } from '../Food.js';
import {useContext} from 'react'
import {dataContext} from '../Context/UserContext'
import { RxCross2 } from "react-icons/rx";
import Card2 from '../Components/Card2.jsx';
import {useSelector} from 'react-redux'

function Home() {

   let {cat,setCat,setShow,show}=useContext(dataContext)

   function hello(category) {
    if (category === 'All') {
      setCat(food_items);
    }
    else {
      const filteredItems = food_items.filter(item => item.food_category === category);
      setCat(filteredItems,'i am filter data');
    }
    }
   const selector=useSelector(state=>state.counter)
   const subtotal =selector.reduce((total,item)=>total+(item.quantity*item.price),0)
   const delievry=200;
   const total=subtotal+delievry
   const totalitems=selector.reduce((acc,item)=>acc+item.quantity,0)

   console.log(total,'total is');
  
    return (
    <div className='bg-emerald-100 w-full min-h-screen rounded-md'>
      <Nav/>
      
      <div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
        {Categories.map((item, index) => (
          <div 
            key={index} 
            className='w-[100px] h-[100px] bg-white flex flex-col items-start gap-5 justify-start p-3 text-black font-semibold font-serif shadow-lg rounded-md hover:bg-emerald-200 cursor-pointer hover:text-white transition-all duration-200' 
            onClick={() => hello(item.name)}  
          >
            {item.icon}
            {item.name}
          </div>
        ))}
      </div>

      <div className='flex flex-wrap gap-3 justify-center items-center pt-5 pb-5'>
        {cat.map((item) => (
          <Card 
            key={item.id}
            name={item.food_name} 
            price={item.price} 
            type={item.food_type} 
            id={item.id} 
            image={item.food_image}
          />
        ))}
      </div>

      <div className={`w-full md:w-[50vw] lg:w-[40vw]  fixed  min-h-screen top-0  right-0 bg-white shadow-lg p-6 transition-all duration-500   ${show?'translate-x-0' :'translate-x-full'}`}>
        <div className='top-0 sticky overflow-y-auto h-[100vh] pb-8 overflow-hidden'>

      <header className='flex justify-between items-center w-[100%]'>
        <span className='text-[15px] font-semibold text-emerald-600 font-serif uppercase'>shopping cart <span className='font-sans uppercase'> ({totalitems})</span></span>
        <RxCross2 className='text-emerald-300 text-[18px] w-[25px] h-[25px] hover:text-emerald-700 cursor-pointer font-serif font-bold' onClick={()=>setShow(false)}/>
      </header>

      {/* add item if not then empty card show */}
       {
       selector.length>0? 
        <>

      <div className='flex flex-col gap-3 w-full mt-5'>

      {
      selector.map((items)=>{
        return <Card2 image={items.image} id={items.id} price={items.price}  name={items.name} quantity={items.quantity}/> 
       })
       }

      </div>

      <div className='w-full border-t-2 border-t-emerald-600 border-b-2 border-b-emerald-600 mt-7 flex flex-col gap-5 p-6'>

        <div className='flex justify-between items-center w-full'>
          <span className='text-xl text-green-500 font-semibold font-serif'>Subtotal</span>
          <span className='text-xl text-green-500 font-semibold font-serif'>Rs/{subtotal}-</span>
        </div>

         <div className='flex justify-between items-center w-full'>
          <span className='text-xl text-green-500 font-semibold font-serif'>Delievry Fee</span>
          <span className='text-xl text-green-500 font-semibold font-serif'>Rs/{delievry}-</span>
        </div>

        
       </div>

       <div className='flex justify-between items-center w-full p-6'>
        <span className='text-xl text-green-500 font-semibold font-serif'>Total</span>
        <span className='text-xl text-green-500 font-semibold font-serif'>PKR Rs/{total}-</span>

       </div>
       
      
   
   <div className='w-[60%] p-4 bg-emerald-400 text-center m-auto rounded-md'>
    <button className='font-bold text-white font-serif text-[20px]'>place order</button>
   </div>

   </>:

   <div className='text-emerald-600 font-serif text-2xl'>Your cart is empty</div>
       }
  
      </div>

    </div>
    </div>

  );
}

export default Home;

