import React, { createContext, useState} from 'react'


export const adddata = createContext("");
export const updatedata = createContext("");
export const dltdata = createContext("");

const ContextProvider = ({children}) => {

    const [udata, setUdata] = useState("");
    const [updata, setUpdata] = useState("");
    const [deldata, setdeldata] = useState("");
  return (
    <adddata.Provider value={{udata, setUdata}}>
     <updatedata.Provider value={{updata, setUpdata}}>
     <dltdata.Provider value={{deldata, setdeldata}}>
        {children}
        </dltdata.Provider>
        </updatedata.Provider>
    </adddata.Provider>
  )
}

export default ContextProvider