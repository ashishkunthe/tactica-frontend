import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export function Generate() {
  const brandRef = useRef<HTMLInputElement>(null);
  const platformRef = useRef<HTMLInputElement>(null);
  const toneRef = useRef<HTMLInputElement>(null);
  const audienceRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const brandName = brandRef.current?.value;
    const platform = platformRef.current?.value;
    const tone = toneRef.current?.value;
    const targetAudience = audienceRef.current?.value;

    setLoading(true);
    try {
      const response = await axios.post(
        `${backendUrl}/calender/generate`,
        {
          brandName,
          platform,
          tone,
          targetAudience,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      alert(response.data.message);
      navigate("/calendar");
    } catch (error: any) {
      console.log("Something went wrong", error);
      alert(error.response?.data?.message || "Failed to generate plan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-80px)] bg-[#f9f9f9] px-4">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-extrabold text-[#5A4FF3] mb-6 text-center">
          Generate Content Plan
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Brand Name
            </label>
            <input
              ref={brandRef}
              type="text"
              placeholder="e.g. CodePilot"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5A4FF3]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Platform
            </label>
            <input
              ref={platformRef}
              type="text"
              placeholder="e.g. Instagram, LinkedIn"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5A4FF3]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tone
            </label>
            <input
              ref={toneRef}
              type="text"
              placeholder="e.g. Witty, Professional, Casual"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5A4FF3]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Target Audience
            </label>
            <input
              ref={audienceRef}
              type="text"
              placeholder="e.g. Startup founders, Developers"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5A4FF3]"
              required
            />
          </div>

          <button
            disabled={loading}
            type="submit"
            className="w-full bg-[#5A4FF3] hover:bg-[#4a3df0] text-white py-2 rounded-md font-medium transition"
          >
            {loading ? "Generating..." : "Generate Plan"}
          </button>
        </form>
      </div>
    </div>
  );
}
