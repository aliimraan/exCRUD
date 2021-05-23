import React,{useState,useEffect} from 'react'
import CustomForm from '../components/CustomForm/CustomForm'
import Header from '../components/Header/Header'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function EditRecord(props) {
    const [record,setRecord]=useState([])
    const history=useHistory()

    useEffect(()=>{
        setRecord(props.location.query)
    },[])
    
    const submitHandler=async(e,data)=>{
        e.preventDefault()
        console.log(data)
       const {first_name,last_name,email,city,state,pincode}=data
        if(pincode.length!==5){
            const enteredPincode=pincode.length
            alert(`pincode length mustbe 5 and you have entered ${enteredPincode} `)
        }else{
          try{
                const response=await axios.get('https://o1wm686yz2.execute-api.us-east-1.amazonaws.com/v1/edit', 
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
        <CustomForm submitHandler={submitHandler} isEdit="true" record={record} BtnName="update"/>
    </div>
    )
}

export default EditRecord
