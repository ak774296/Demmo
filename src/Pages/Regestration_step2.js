import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Regestration_step2({data,setData}){
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
    function nextHandler(){
      if(data.password.length<=6){
        toast.error("Password length must be atleast 7");
      }
        else if(data.password!=data.cpassword){
            toast.error("Password Not matched");
            return;
        }
        else{
          navigate('/dashboard');
          toast.success("Regestered Succesfully");
        }
    }
    function prvHandler(){
      navigate(-1);
    }
    return <div className="bg-slate-200 w-screen min-h-[1200px] ">
        <div className="
        w-5/12 min-h-[300px]
        mx-auto border-2
        border-slate-300
        rounded-lg  bg-white flex flex-col gap-10">
        <div className="text-3xl text-center pt-4 pb-4 bg-blue-400">
            Regestration Step 2
        </div>
        <form className="flex flex-col gap-2 text-xl ml-10 mr-10">
            
            <label htmlFor="password">Password: </label>
            <input 
            className="border-2  rounded-md"
            placeholder="Enter Password"
            type="password"
            required
            name="password"
            value={data.password}
            onChange={changeHandler}
            />

              <label htmlFor="cpassword">confirm Password: </label>
            <input
            className="border-2  rounded-md"
            placeholder="Confirm Password"
            required
            type="password"
            name="cpassword"
            value={data.cpassword}
            onChange={changeHandler}
            />
        </form>
        <div className="flex justify-between text-xl">
              <button className="border-2 border-slate-400 p-[5px] mt-3 mb-3 
              rounded-lg w-[100px] mx-auto
              hover:bg-black hover:text-white 
              transtion duration-100 ease-in"
              onClick={prvHandler}>Pervious</button>

              <button className="border-2 border-slate-400 p-[5px] mt-3 mb-3 
              rounded-lg w-[100px] mx-auto
              hover:bg-black hover:text-white 
              transtion duration-100 ease-in"
              onClick={nextHandler}>Next</button>
            </div>
        </div>
    </div>
}