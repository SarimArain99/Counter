"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  function increase() {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400">
      <div className="relative w-96 h-96 bg-white shadow-xl rounded-lg flex flex-col items-center justify-center border-2 border-blue-300">
        <h1 className="absolute top-4 text-3xl font-extrabold text-blue-600">
          Counter
        </h1>
        <p className="text-6xl font-bold text-gray-800">{count}</p>
        <div className="absolute bottom-8 flex space-x-6">
          <button
            onClick={decrease}
            className="bg-red-500 text-white px-8 py-3 rounded-full text-xl font-medium hover:bg-red-600 active:scale-90 transition-transform shadow-md"
          >
            Decrease
          </button>
          <button
            onClick={increase}
            className="bg-blue-500 text-white px-8 py-3 rounded-full text-xl font-medium hover:bg-blue-600 active:scale-90 transition-transform shadow-md"
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  );
}
