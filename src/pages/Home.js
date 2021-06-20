import React,{useState,useEffect} from 'react'
import CustomTable from '../components/CustomTable/CustomTable'
import Header from '../components/Header/Header'
import RowOne from '../components/RowOne/RowOne'
import '../Css/Home.css'
import axios from 'axios'
import DeleteRecord from './DeleteRecord'

function Home() {
   const [isActive,setActive]=useState(false)
   const [userEmail,setUserEmail]=useState('')
   const [user,setUser]=useState('')
   const [record,setRecord]=useState([])
   const [search,setSearch]=useState('')

   useEffect(()=>{
    getData()
   },[isActive,record])
   
   const onChange=(e)=>{
    return setSearch(e.target.value)
}

    const getData=async()=>{
       try{
            const response= await axios.get(`https://j5ej5u32gg.execute-api.us-east-1.amazonaws.com/v1/fetch`)
            return setRecord([response.data.data])
        }catch(err){
           console.log(err)
       }
    }
   
    return (
        <div className="home">
            <Header/>
            <RowOne onChange={onChange} />
            <CustomTable record={record} active={isActive} setActive={setActive} setUser={setUser} setUserEmail={setUserEmail} search={search}/>
            <div style={isActive===false?{display:'none'}:{display:'block'}}>
                <DeleteRecord isActive={isActive} setActive={setActive} user={user} userEmail={userEmail}/>
            </div>
        </div>
    )
}

export default Home
