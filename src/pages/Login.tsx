import { useRef } from "react";
import { Link } from "react-router-dom";

export function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    console.log({
      email,
      password,
    });

    // → Call your backend API here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f9f9f9]">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-[#5A4FF3] mb-6">
          Login to Tactica
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
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
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to="/register" className="text-[#5A4FF3] hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
