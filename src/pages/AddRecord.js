import React,{useState} from 'react'
import CustomForm from '../components/CustomForm/CustomForm'
import Header from '../components/Header/Header'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function AddRecord() {
    const history=useHistory()
    
    const submitHandler=async(e,data)=>{
        e.preventDefault()
       const {first_name,last_name,email,city,state,pincode}=data
        if(pincode.length!==5){
            const enteredPincode=pincode.length
            alert(`pincode length mustbe 5 and you have entered ${enteredPincode} `)
        }else{
          try{
                const response=await axios.get('https://c0ri699qs5.execute-api.us-east-1.amazonaws.com/v1/add', 
                { params: { 
                    param1:email,
                    param2:first_name,
                    param3:last_name,
                    param4:pincode,
                    param5:city,
                    param6:state
                    } 
                })
            if(response.status===200){
                alert(response.data.Message)
                history.push('/')
            }
            }catch(e){
                alert(e)
            }
        }
        
    }
    return (
        <div>
            <Header/>
            <CustomForm submitHandler={submitHandler} isEdit="false" BtnName="add" />
        </div>
    )
}

export default AddRecord
