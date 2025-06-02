import  { createContext, useState } from 'react';
import {food_items} from '../Food.js'
export const dataContext=createContext();
 
 function UserContext({children}) {
  const [input, setInput] = useState('hello');
  const [cat, setCat]=useState(food_items)
  let [show,setShow]=useState(false);

    let data = {
    input,
    setInput,
    cat,
    setCat,
    show,
    setShow
    }

    return (
        <div>
            <dataContext.Provider value={data}>
             {children}
            </dataContext.Provider>
        </div>
    );
}

export default UserContext;