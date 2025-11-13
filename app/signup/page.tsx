"use client"

import { useRouter } from 'next/navigation';
import React from 'react'

 const signup = () => {
   const router = useRouter();
  
      function handle_navigate() {
          router.push("/login")
      }
  
      return (
          <div>
              <h1>Signup Page</h1>
              <button onClick={handle_navigate}>Go To Login Page</button>
          </div>
      )
}

export default signup