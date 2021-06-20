import React,{useState,useEffect} from 'react'
import {Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DeleteRecord from '../../pages/DeleteRecord'
import './customTable.css'

function CustomTable({record,active,setActive,setUser,setUserEmail,search}) {
    useEffect(()=>{},[record])
    console.log(search)

    const clickHandler=(first,last,email)=>{
        if(active===true){
             return setActive(false)
        }else{
             setActive(true)
                setUser(`${first} ${last}`)
                setUserEmail(email)
        }
    }
    const showData=()=>{
        if(record[0]===undefined||record[0]===[]){
            return 'loading'
        }
            return record[0].filter((val)=>{
                if(search==''){
                    return val
                }else if(val.first_name.toLowerCase().includes(search.toLowerCase())||val.last_name.toLowerCase().includes(search.toLowerCase())||val.email.toLowerCase().includes(search.toLowerCase())||val.city.toLowerCase().includes(search.toLowerCase())||val.states.toLowerCase().includes(search.toLowerCase())||val.pincode.includes(search)){
                    return val
                }
            }).map((item,index)=>{
                return (
                <tr key={index}>
                    <td >{++index}</td>
                    <td >{item.first_name}</td>
                    <td >{item.last_name}</td>
                    <td >{item.email}</td>
                    <td >{item.city}</td>
                    <td >{item.states}</td>
                    <td >{item.pincode}</td>
                    <td className="buttons">
                        <Link to={{
                            pathname: "/editRecord" , 
                            query:item
                          }} className="anchor">edit</Link>
                        <button onClick={(e)=>clickHandler(item.first_name,item.last_name,item.email)} className="anchor">delete</button>
                    </td>
                </tr>
                )
            })
        
    }
   

    return (
        <div className="table ">
            <Table className="custom_table">
                <thead className="custom_table_head">
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Pincode</th>
                        <th>Action</th>
                    </tr>
                </thead>
                    <tbody>
                        {showData(record)}
                    </tbody>
            </Table>
        </div>
    )
}

export default CustomTable
