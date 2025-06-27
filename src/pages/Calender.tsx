export function Calender() {
  // 🔥 Dummy data structure to test layout
  const posts = [
    {
      day: 1,
      idea: "Introduce Tactica",
      caption: "Meet Tactica — your AI-powered content co-pilot 🚀",
      hashtags: ["#Tactica", "#ContentAI", "#SaaS"],
    },
    {
      day: 2,
      idea: "Why Tactica exists",
      caption:
        "Because brainstorming 30 captions shouldn’t take 30 hours. That’s Tactica.",
      hashtags: ["#WorkSmart", "#ContentPlanning", "#AI"],
    },
    {
      day: 3,
      idea: "Customer love",
      caption:
        "Creators ❤️ Tactica. SaaS founders 🏆 Tactica. Join the movement.",
      hashtags: ["#LoveTactica", "#CreatorsTool", "#StartupLife"],
    },
    {
      day: 4,
      idea: "Behind the scenes",
      caption:
        "Peek behind the AI. Our team codes, laughs, and breaks things (sometimes).",
      hashtags: ["#BehindTheScenes", "#StartupLife", "#TacticaTeam"],
    },
    {
      day: 5,
      idea: "Share a meme",
      caption: "When the AI writes better captions than you 😅",
      hashtags: ["#MemeLife", "#ContentCreation", "#Tactica"],
    },
    {
      day: 6,
      idea: "Startup tip",
      caption:
        "Content isn’t king. CONSISTENCY is. Let Tactica handle that for you.",
      hashtags: ["#StartupTips", "#ContentStrategy", "#SaaS"],
    },
    {
      day: 7,
      idea: "Tactica feature highlight",
      caption:
        "Generate a 30-day content plan in minutes. Yep, that’s Tactica.",
      hashtags: ["#Tactica", "#FeatureDrop", "#Automation"],
    },
    {
      day: 8,
      idea: "Team intro",
      caption: "Meet the faces behind the AI. Small team, big dreams.",
      hashtags: ["#TeamTactica", "#StartupCulture", "#DreamBig"],
    },
    {
      day: 9,
      idea: "Share a user testimonial",
      caption: "'Tactica saved us HOURS every week' — A happy founder 😍",
      hashtags: ["#Testimonial", "#LoveTactica", "#SaaS"],
    },
    {
      day: 10,
      idea: "Industry fact",
      caption:
        "Did you know? 70% of startups struggle with content consistency.",
      hashtags: ["#DidYouKnow", "#ContentChallenge", "#Startups"],
    },
    {
      day: 11,
      idea: "Motivational quote",
      caption:
        "‘Content precedes design. Design in the absence of content is not design, it’s decoration.’",
      hashtags: ["#ContentMatters", "#Motivation", "#CreatorMindset"],
    },
    {
      day: 12,
      idea: "Product roadmap teaser",
      caption: "We’re cooking something spicy 🌶️ New features dropping soon...",
      hashtags: ["#Roadmap", "#ComingSoon", "#Tactica"],
    },
    {
      day: 13,
      idea: "Share coding blooper",
      caption:
        "When the AI decided ‘#Banana’ was a relevant hashtag 🍌 (Spoiler: it wasn’t)",
      hashtags: ["#DevLife", "#StartupHumor", "#Tactica"],
    },
    {
      day: 14,
      idea: "Benefits of Tactica",
      caption: "Save time. Stay consistent. Let AI do the boring part.",
      hashtags: ["#SaveTime", "#CreatorTool", "#Tactica"],
    },
    {
      day: 15,
      idea: "Poll: What's your biggest content challenge?",
      caption: "Is it: A) Ideas B) Consistency C) Writing D) Posting",
      hashtags: ["#Poll", "#ContentChallenge", "#SaaSCommunity"],
    },
    {
      day: 16,
      idea: "Mini tutorial",
      caption:
        "How to generate a month of posts in under 2 minutes with Tactica.",
      hashtags: ["#Tutorial", "#ContentAI", "#Tactica"],
    },
    {
      day: 17,
      idea: "Show a growth chart",
      caption:
        "From zero to 1000+ content plans generated. Thank you, community!",
      hashtags: ["#Growth", "#StartupJourney", "#Tactica"],
    },
    {
      day: 18,
      idea: "Post a coding quote",
      caption:
        "‘Talk is cheap. Show me the code.’ — Linus Torvalds... or the AI 👾",
      hashtags: ["#DevLife", "#CodingQuotes", "#Tactica"],
    },
    {
      day: 19,
      idea: "How Tactica helps startups",
      caption:
        "Founders use Tactica to stay consistent without burnout. Gamechanger 🔥",
      hashtags: ["#FounderTools", "#NoBurnout", "#SaaS"],
    },
    {
      day: 20,
      idea: "Office vibes",
      caption: "Messy desks, empty coffee mugs ☕ and beautiful code.",
      hashtags: ["#OfficeVibes", "#StartupLife", "#TacticaTeam"],
    },
    {
      day: 21,
      idea: "User-generated content shoutout",
      caption:
        "Check out how @janeStartup used Tactica to crush content goals 💪",
      hashtags: ["#UGC", "#CreatorSuccess", "#Tactica"],
    },
    {
      day: 22,
      idea: "Memes again (because… memes)",
      caption:
        "‘I don’t always post on social...’ But when I do, Tactica wrote it.",
      hashtags: ["#ContentMeme", "#SaaS", "#StartupHumor"],
    },
    {
      day: 23,
      idea: "Discuss startup pain points",
      caption:
        "Posting regularly feels like a full-time job. Tactica automates it.",
      hashtags: ["#StartupPain", "#Automation", "#ContentHack"],
    },
    {
      day: 24,
      idea: "Drop a stat about AI",
      caption:
        "90% of marketers believe AI will change how content is created. (It already is.)",
      hashtags: ["#AIContent", "#Marketing", "#Tactica"],
    },
    {
      day: 25,
      idea: "Highlight the problem Tactica solves",
      caption: "No more blank pages. No more content burnout. That’s Tactica.",
      hashtags: ["#BurnoutFree", "#ContentSolutions", "#SaaS"],
    },
    {
      day: 26,
      idea: "Upcoming webinar announcement",
      caption:
        "Join us: ‘How AI is changing content creation’ → Live this Friday!",
      hashtags: ["#Webinar", "#ContentAI", "#Tactica"],
    },
    {
      day: 27,
      idea: "Behind the algorithm",
      caption: "Our secret sauce? Language models + data + lots of coffee ☕",
      hashtags: ["#BehindAI", "#SaaSTech", "#Tactica"],
    },
    {
      day: 28,
      idea: "Testimonial time again",
      caption:
        "‘Tactica made content the easiest part of our marketing.’ — SaaS Founder 💼",
      hashtags: ["#Testimonial", "#SaaS", "#LoveTactica"],
    },
    {
      day: 29,
      idea: "Founder quote",
      caption:
        "‘We built Tactica because we were tired of content chaos.’ — Founders",
      hashtags: ["#FounderTalk", "#SaaSJourney", "#Tactica"],
    },
    {
      day: 30,
      idea: "Monthly recap",
      caption:
        "30 days. 30 posts. Countless connections. Powered by Tactica 💙",
      hashtags: ["#MonthlyRecap", "#ContentDone", "#Tactica"],
    },
  ];

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#f9f9f9] px-6 py-8">
      <h2 className="text-3xl font-extrabold text-[#5A4FF3] mb-6 text-center">
        Your Content Calendar
      </h2>

      {posts.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
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
