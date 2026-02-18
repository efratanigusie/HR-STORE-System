"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = async () => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      {
        username,
        password,
      }
    );

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("role", res.data.user.role);

    if (res.data.user.role === "hr") {
      router.push("hr/dashboard");
    } else {
      router.push("store/dashboard");
    }

  } catch (error) {
    if (error.response) {
      // Backend error (400, 401, etc.)
      alert(error.response.data.message);
    } else {
      // Network / server down
      alert("Server not responding");
    }
  }
};


  return (
    <div className="h-screen flex items-center justify-center bg-blue-700">
      <div className="w-96 text-center">
        <div className="text-4xl text-white mb-6">🛒</div>

        <input
          placeholder="USERNAME"
          className="w-full p-3 mb-3 bg-blue-600 text-white rounded"
          onChange={e => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="PASSWORD"
          className="w-full p-3 mb-4 bg-blue-600 text-white rounded"
          onChange={e => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-white text-blue-700 font-bold p-3 rounded"
        >
          LOGIN
        </button>
      </div>
    </div>
  );
}
