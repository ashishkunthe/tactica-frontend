import axios from "axios";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export function Register() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const username = usernameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    try {
      setIsLoading(true);
      const response = await axios.post(`${backendUrl}/auth/register`, {
        username: username,
        email: email,
        password: password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/");
    } catch (error) {
      console.log("something went wrong", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f9f9f9]">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-[#5A4FF3] mb-6">
          Register to Tactica
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              ref={usernameRef}
              type="text"
              placeholder="Enter username"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5A4FF3]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5A4FF3]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              ref={passwordRef}
              type="password"
              placeholder="Enter password"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5A4FF3]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#5A4FF3] hover:bg-[#4a3df0] text-white py-2 rounded-md font-medium transition"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-[#5A4FF3] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
