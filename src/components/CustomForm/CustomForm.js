import React,{useState,useEffect} from 'react'
import './customForm.css'
import {useHistory} from 'react-router-dom'


function CustomForm({submitHandler,isEdit,record,BtnName}) {
    const [first_name,setFirstName]= useState('')
    const [last_name,setLastName]= useState('')
    const [email,setEmail]= useState('')
    const [city,setCity]= useState('')
    const [state,setState]= useState('')
    const [pincode,setPincode]= useState('')
    const history=useHistory()
    const data={first_name,last_name,email,city,state,pincode}

        useEffect(()=>{
            if(record===[]||record===undefined){
                return ''
            }else{
                const {first_name,last_name,email,states,city,pincode}=record
               
                setFirstName(first_name)
                setLastName(last_name)
                setEmail(email)
                setCity(states)
                setState(city)
                setPincode(pincode)
            }
        },[record])
   
    return (
        <div className="customForm">
            <form onSubmit={(e)=>submitHandler(e,data)}>
                <div className="formArea">
                <div className="formGroup">
                <label>first name</label>
                <input type="text" value={first_name} onChange={(e)=>setFirstName(e.target.value)}/>
            </div>
            <div className="formGroup">
                <label>last name</label>
                <input type="text" value={last_name} onChange={(e)=>setLastName(e.target.value)}/>
            </div>
            <div className="formGroup">
                <label>email</label>
                <input type="email" className={isEdit==="true"&&"active"} value={email} onChange={isEdit==="false"?(e)=>setEmail(e.target.value):{}} pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" required />
            </div>
            <div className="formGroup">
                <label>state</label>
                <select onChange={(e)=>setState(e.target.value)}>
                    <option value={state}>{state!==""?state:"choose state"}</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="delhi">Delhi</option>
                    <option value="goa">Goa</option>
                    <option value="gujrat">Gujrat</option>
                </select>
            </div>
            <div className="formGroup">
                <label>city</label>
                <input type="text" value={city} onChange={(e)=>setCity(e.target.value)}/>
            </div>
            <div className="formGroup">
                <label>pincode</label>
                <input type="number" value={pincode} onChange={(e)=>setPincode(e.target.value)}/>
            </div>
                </div>
                <div className="buttonArea">
                    <button type="submit">{BtnName}</button>
                    <button onClick={()=>history.push('/')}>cancel</button>
                </div>
            </form>
        </div>
    )
}

export default CustomForm
