'use client'
import { useState } from "react";
import { api } from "./api";


export default function Home() {
  const [email, setEmail] = useState("")

  async function handleSubmit() {
    if (!email) return 

    const response = await api.post('/user', {
      email
    })

    console.log(response)
  }

  return (
    <div className="flex justify-center items-center w-full h-screen flex-col gap-2">
      <input type="text" className="text-gray-600 p-2 w-1/4" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleSubmit} className="bg-green-400 text-black p-3 hover:bg-green-500 w-1/4 rounded font-semibold">
        Entrar
      </button>
    </div>
  );
}
