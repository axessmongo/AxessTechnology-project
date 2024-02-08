import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ScrollTop from '../components/ScrollTop';

export const userContext = createContext();

export default function Store({children}) {





    
    const [value, setValue] = useState(false);

    return (
        <userContext.Provider value= {[value,setValue]} >
            {children}
        </userContext.Provider>
    )
}