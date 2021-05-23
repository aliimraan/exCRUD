import React,{useEffect} from 'react'
import '../Css/DeleteRecord.css'
import axios from 'axios'

function DeleteRecord({isActive,setActive,user,userEmail}) {
    useEffect(()=>{},[isActive,user])

    const clickHandler=()=>{
        if(isActive===true){
            return setActive(false)
        }
    }
    const deleteHandler= async()=>{
        try{
            const response=await axios.get('https://k6j938wg66.execute-api.us-east-1.amazonaws.com/v1/delete',
            { params: { 
                param1:userEmail,
                } 
            })
            if(response.status===200){
                alert(response.data.Message)
                return setActive(false)
            }
        }catch(e){
            alert(e)
        }
    }
    return (
       <div className="deleteArea">
            <div className="delete">
             are you sure to delete {user}
                <div className="buttonArea">
                    <button onClick={deleteHandler}>delete</button>
                    <button onClick={()=>clickHandler()}>cancel</button>
                </div>
             </div>
       </div>

    )
}

export default DeleteRecord
