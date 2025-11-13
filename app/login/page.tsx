"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const login = () => {
    const router = useRouter();

    function handle_navigate() {
        router.push("/signup")
    }

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={handle_navigate}>Go To Signup Page</button>
        </div>
    )
}

export default login;
