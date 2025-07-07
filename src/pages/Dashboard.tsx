import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

interface ContentPlan {
  _id: string;
  brandName: string;
  platform: string;
  tone: string;
  posts: any[];
}

export function Dashboard() {
  const [content, setContent] = useState<ContentPlan | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCalender() {
      try {
        const response = await axios.get(`${backendUrl}/calender`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        const data = response.data;
        if (data && data.brandName) {
          setContent(data);
        } else {
          setContent(null);
        }
      } catch (error) {
        console.log("Failed to fetch calendar", error);
        setContent(null);
      } finally {
        setLoading(false);
      }
    }

    getCalender();
  }, []);

  async function handleDelete(id: string | undefined) {
    try {
      const response = await axios.delete(`${backendUrl}/calender/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      alert(response.data.message);
      setContent(null);
    } catch (error) {
      console.log("Failed to delete", error);
      alert("Failed to delete the plan.");
    }
  }

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-80px)] bg-[#f9f9f9] px-4">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-extrabold text-[#5A4FF3] mb-6 text-center">
          Welcome to Tactica
        </h2>

        {loading ? (
          <div className="text-center text-gray-600">Loading your plan...</div>
        ) : content ? (
          <div className="space-y-4">
            <div className="bg-[#f5f5f5] rounded-md p-4">
              <h3 className="text-xl font-bold mb-2">Your Current Plan</h3>
              <p className="text-gray-700">
                <span className="font-semibold">Brand:</span>{" "}
                {content.brandName}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Platform:</span>{" "}
                {content.platform}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Tone:</span> {content.tone}
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <Link
                to="/calendar"
                className="flex-1 bg-[#5A4FF3] hover:bg-[#4a3df0] text-white text-center py-2 rounded-md font-medium transition"
              >
                View Calendar
              </Link>
              <Link
                to="/generate"
                className="flex-1 border border-[#5A4FF3] text-[#5A4FF3] hover:bg-[#f2f1fe] text-center py-2 rounded-md font-medium transition"
              >
                Generate New Plan
              </Link>
              <button
                className="flex-1 border border-red-500 text-red-500 hover:bg-red-50 py-2 rounded-md font-medium transition"
                onClick={() => handleDelete(content._id)}
              >
                Delete Plan
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-6">
            <p className="text-lg text-gray-700">
              You don’t have a content plan yet.
            </p>
            <Link
              to="/generate"
              className="bg-[#5A4FF3] hover:bg-[#4a3df0] text-white px-6 py-3 rounded-md font-medium transition"
            >
              Generate Now
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
