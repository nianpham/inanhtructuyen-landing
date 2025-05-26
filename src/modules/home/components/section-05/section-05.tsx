// components/ReadingTestCollection.tsx
"use client";

import { CreditCard, Plane, RotateCcw } from "lucide-react";
import React, { useState } from "react";
import FeatureCard from "./components/card";
import Image from "next/image";
import { IMAGES } from "@/utils/image";

const features = [
  {
    icon: <Plane className="w-12 h-12" strokeWidth={1.5} />,
    title: "Free Worldwide Shipping",
    description: "On all orders over $75.00",
    linkText: "Learn More",
  },
  {
    icon: <CreditCard className="w-12 h-12" strokeWidth={1.5} />,
    title: "100% Payment Secure",
    description: "We ensure secure payment with PEV",
    linkText: "Learn More",
  },
  {
    icon: <RotateCcw className="w-12 h-12" strokeWidth={1.5} />,
    title: "30 Days Return",
    description: "Return it within 20 day for an exchange",
    linkText: "Learn More",
  },
];

const Section5: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = () => {
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <div className="w-full mx-auto px-5 lg:px-0">
      <section>
        <div className="bg-gray-50">
          {/* Newsletter Section */}
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src={IMAGES.BANNER_2}
                alt=""
                fill
                priority
                className="object-cover object-right"
              />
            </div>
            <div className="relative max-w-4xl mx-auto px-6 py-10 my-20 text-center backdrop-blur-xs bg-white/70 rounded-lg">
              <div className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
                Subscribe To Our Newsletter
              </div>
              <p className="text-base text-gray-600 mb-10 max-w-2xl mx-auto">
                Sign up for the weekly newsletter and build better ecommerce
                stores.
              </p>
              <div className="max-w-2xl mx-auto mb-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="placeholder-gray-500 flex-1 px-6 py-2 text-lg border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent bg-transparent"
                  />
                  <button
                    onClick={handleSubmit}
                    className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-md hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                  >
                    {isSubscribed ? "Subscribed!" : "Subscribe"}
                  </button>
                </div>
              </div>
              <p className="text-gray-500">
                We respect your privacy, so we never share your info.
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-[#F8F8F8] py-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                {features.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    linkText={feature.linkText}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section5;
