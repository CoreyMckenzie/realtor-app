import React from 'react'
import { useState } from 'react';

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const {email,password} = formData;

  const onChange = (event) => {
    console.log(event.target.value);
  }
  return (
    <section>
      <h1 className="text=3xl text-center mt-6 font-bold">Sign In</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto"> 
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80" alt="key" className='w-full rounded-2xl'/>
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form> {/*Won't require an action as we'll be using onSubmit*/}
            <input type="email" placeholder="Enter your email address" id="email" value={email}/>
          </form> 
        </div>
      </div>
    </section>

  )
}
