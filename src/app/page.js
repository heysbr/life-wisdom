"use client";

import { useState } from "react";

import { Quote, RefreshCw } from "lucide-react";
import quotes from "@/app/data";

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const generateQuote = () => {
    setIsAnimating(true);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
      setIsAnimating(false);
    }, 200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center p-4">
      <div className="relative z-10 w-full max-w-2xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Quote className="h-8 w-8 text-blue-400 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Life Wisdom
            </h1>
          </div>
          <p className="text-gray-400 text-lg">
            Daily inspiration for a better life
          </p>
        </div>

        <div className="bg-gray-800/80 backdrop-blur-sm border-gray-700 shadow-2xl rounded-lg border text-card-foreground">
            <div className="p-8 md:p-12">
            <div className="flex items-center">
              <Quote className=" shrink-0 h-14 w-14 text-blue-400/30" />
              <blockquote
                className={`text-xl md:text-2xl font-medium text-white leading-relaxed transition-all duration-300 pl-6 ${
                  isAnimating
                    ? "opacity-0 translate-y-4"
                    : "opacity-100 translate-y-0"
                }`}
              >
                {currentQuote}
              </blockquote>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center text-center mt-8">
          <button
            onClick={generateQuote}
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-3xl cursor-pointer text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            disabled={isAnimating}
          >
            <RefreshCw
              className={`h-5 w-5 mr-2 ${isAnimating ? "animate-spin" : ""}`}
            />
            Generate Quote
          </button>
        </div>
      </div>
    </div>
  );
}
