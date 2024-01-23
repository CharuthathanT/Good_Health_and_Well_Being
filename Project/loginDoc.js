import React from 'react'
import './LoginDoc.css';

export default function LoginDoc() {
    const Doctor=()=>{
        let name=document.getElementById("uname").value;
        let pwd=document.getElementById("pwd").value;
         let obj={
            name:name,
            pwd:pwd
        }
        let str=JSON.stringify(obj);
        localStorage.setItem("data",str);
        document.getElementById("name").value="";
        document.getElementById("age").value="";
     }
  return (
    <>
    <div id='logbgd' className='d-flex flex-column justify-content-center align-items-center'>
        <div id='cardbg' className='card justify-content-center align-items-center'>
            <h1 className='text-primary'>Doctor's Login Page</h1>
        <form>
            <div id="div1">
                <label style={{fontWeight:"bolder"}} className='form-lable m-2' for="uname">Doctor_ID: </label>
                <input className='form-control border-primary p-2' id='uname' type="text" />
                <p id="para1"></p>
            </div>
            <div id="div2">
                <label style={{fontWeight:"bolder"}}  className="form-lable m-2" for="pwd">Password: </label>
                <input className='form-control border-primary p-2' id='ped' type="Password" />
                <p id="para2"></p>
            </div>
            <div class="text-center">
                <button className='btn btn-primary m-2 p-2'  onClick={Doctor} type="submit">Submit</button>
            </div>
        </form>
        </div>
    </div>
    </>
  )
}
