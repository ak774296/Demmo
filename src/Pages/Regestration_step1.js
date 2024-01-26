import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Regestration_step1({data,setData}){
    const navigate=useNavigate();
    function changeHandler(event){
        setData(
            (pre)=>{
              return{
                ...pre,[event.target.name]:event.target.value
              }
            }
          )
    }
    function submitHandler(event){
      event.preventDefault();
        navigate('/regestration-step-2');
    }
    return <div className="bg-slate-200 w-screen min-h-[1200px] ">
        <div className="
        w-5/12 min-h-[400px]
        mx-auto border-2
        border-slate-300
        rounded-lg  bg-white flex flex-col gap-10">
        <div className="text-3xl text-center pt-4 pb-4 bg-blue-400">
            Regestration Step 1
        </div>
        <form className="flex flex-col gap-2 text-xl ml-10 mr-10 " onSubmit={submitHandler}>
            <label htmlFor="firstName">First Name: </label>
            <input 
            className="border-2  rounded-md"
            placeholder="Enter your first name"
            type="text"
            required
            name="firstName"
            value={data.firstName}
            onChange={changeHandler}
            />
              <label htmlFor="middleName">Middle Name: </label>
            <input
            className="border-2  rounded-md"
            placeholder="Enter your middle name"
            type="text"
            name="middleName"
            value={data.middleName}
            onChange={changeHandler}
            />
            <label htmlFor="lastName">Last Name: </label>
            <input
            className="border-2  rounded-md"
            placeholder="Enter your last name"
            type="text"
            name="lastName"
            value={data.lastName}
            onChange={changeHandler}
            />
               <label htmlFor="email">Email id: </label>
            <input
            className="border-2  rounded-md"
            placeholder="Enter your email id"
            type="email"
            name="email"
            value={data.email}
            onChange={changeHandler}
            />
            <button className="border-2 border-slate-400 p-[5px] mt-3 mb-3 
            rounded-lg w-[100px] mx-auto
            hover:bg-black hover:text-white 
            transtion duration-100 ease-in">Next</button>
        </form>
        </div>
    </div>
}