import axios from "axios";
import { useEffect, useState } from "react";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

interface Posts {
  day: number;
  idea: string;
  caption: string;
  hashtags: string[];
}

export function Calender() {
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    async function fetchCalender() {
      try {
        const response = await axios.get(`${backendUrl}/calender`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        setPosts(response.data.posts);
      } catch (error) {
        console.log("Failed to fetch calendar", error);
        setPosts([]);
      }
    }
    fetchCalender();
  }, []);

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#f9f9f9] px-6 py-8">
      <h2 className="text-3xl font-extrabold text-[#5A4FF3] mb-6 text-center">
        Your Content Calendar
      </h2>

      {posts?.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts?.map((post: Posts) => (
            <div
              key={post.day}
              className="bg-white rounded-xl shadow-md p-5 flex flex-col gap-3 hover:scale-[1.02] transition"
            >
              <div className="text-sm text-gray-500 font-medium">
                Day {post.day}
              </div>

              <h3 className="text-lg font-bold text-[#111827]">
                💡 {post.idea}
              </h3>

              <p className="text-gray-700">{post.caption}</p>

              <div className="flex flex-wrap gap-2">
                {post.hashtags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#f2f2f2] text-sm px-3 py-1 rounded-full text-[#5A4FF3] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-4 mt-20">
          <p className="text-lg text-gray-700">
            You haven’t generated any content plan yet.
          </p>
          <a
            href="/generate"
            className="bg-[#5A4FF3] hover:bg-[#4a3df0] text-white px-6 py-3 rounded-md font-medium transition"
          >
            Generate Now
          </a>
        </div>
      )}
    </div>
  );
}
