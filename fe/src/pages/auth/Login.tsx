import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup';
import {useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { login } from '../../api/authApi';
import { SyncLoader } from 'react-spinners';

const Login = () => {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false)
    const schema = yup.object({
        email: yup.string().email().required("Email Required"),
        password: yup.string().min(6).required("Password Required"),
    });

    const {reset, register, handleSubmit, formState: {errors}, } = useForm({resolver: yupResolver(schema)});

    const onHandleSubmit = handleSubmit((data) =>{
        setToggle(true)
        console.log(data);
        const {email, password} = data;
        login({email, password}).then((res) =>{
            localStorage.setItem("user", JSON.stringify(res));
            setToggle(false)
            navigate("/")
        })
        // reset();
    })

  return (
    <div className='flex items-center justify-center w-full h-screen'>
        {/* {toggle && <Loading/>} */}
      <div className='border rounded-md w-[500px] min-h-[300px] shadow-sm mx-4 bg-purple-500'>
        <form className='pl-4 mt-8' onSubmit={onHandleSubmit}>
            <span className='font-bold text-[20px]'>Log In</span>
            <br />
            <br />
            <hr />

            <div>
            <div className='mt-2 text-[12px]'>email</div>
            <input className='border h-[35px] w-[95%] rounded-sm outline-none pl-2' placeholder="email" {...register("email")}/>
            <div className='flex justify-end w-[95%]'>
            {errors.password?.message && (
             <div className='text-[12px] text-red-600'>{errors.password?.message}</div>
           )}
            </div>
            </div>

            <div>
            <div className='text-[12px]'>password</div>
            <input className='border h-[35px] w-[95%] rounded-sm outline-none pl-2' placeholder="password" {...register("password")} />
            <div className='flex justify-end w-[95%]'>
            {errors.password?.message && (
             <div className='text-[12px] text-red-600'>{errors.password?.message}</div>
           )}
            </div>
            </div>

            <br />
            <br />
            <div className='w-[95%]'>
            <button className='w-full flex bg-purple-600 rounded-sm justify-center py-3 text-white'  type="submit"> {toggle ? <SyncLoader color="white" size={11} /> : "Log in"}</button>

            <div className='text-[12px] mt-2 text-center'>
                Don't have an Account
                <Link to="/signup">
                    <strong className='text-purple-900 font-bold'>Sign up here</strong>
                </Link>
            </div>

            <br />
                <div className='flex w-full h-4 items-center'>
                    <div className='border-b w-full'/>
                    <div className='mx-4'>or</div>
                    <div className='border-b w-full'/>
                </div>
                <br />

                <div className='flex mb-4'>
                <button className='w-full flex bg-red-600 rounded-sm justify-center py-3 text-white mr-1'>with Google</button>
                <button className='w-full flex bg-blue-700 rounded-sm justify-center py-3 text-white ml-1'>with Facebook</button>
                </div>
            <br />
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
