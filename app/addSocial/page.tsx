"use client";

import { useState } from "react";
import { posts } from "../data/posts";

export default function AddPostPage() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [embedHtml, setEmbedHtml] = useState("");
  const [gradient, setGradient] = useState("from-cyan-500 to-blue-600");
  const [url, setUrl] = useState("");

  const handleAdd = () => {
    const newPost = {
      id: posts.length + 1,
      title,
      date,
      embedHtml,
      gradient,
      url,
    };
    posts.push(newPost); // ✅ Adds to in-memory array
    alert("Post added! Go back to /posts to see it.");
    setTitle("");
    setDate("");
    setEmbedHtml("");
    setUrl("");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-lg bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Add New Post</h1>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-3 rounded bg-gray-700"
        />
        <input
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 mb-3 rounded bg-gray-700"
        />
        <textarea
          placeholder="Embed HTML"
          value={embedHtml}
          onChange={(e) => setEmbedHtml(e.target.value)}
          className="w-full p-2 mb-3 rounded bg-gray-700 h-24"
        />
        <input
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-2 mb-3 rounded bg-gray-700"
        />
        <button
          onClick={handleAdd}
          className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-semibold"
        >
          Add Post
        </button>
      </div>
    </div>
  );
}
