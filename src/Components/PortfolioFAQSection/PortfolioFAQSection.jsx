import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function PortfolioFaqSection() {
  const faqs = [
    {
      question: "Who are your target clients?",
      answer:
        "We work with businesses of all sizes — from startups to established brands — across various industries. Our solutions are designed to adapt to each client’s specific goals and market.",
    },
    {
      question: "How can your marketing solutions help my business grow?",
      answer:
        "By creating tailored strategies that increase visibility, attract the right audience, and convert them into loyal customers. We focus on measurable results that directly support your business growth.",
    },
    {
      question: "Do you provide customized strategies for different industries?",
      answer:
        "Yes. We believe every business is unique, so we analyze your industry, competitors, and target audience to build a strategy that perfectly fits your needs.",
    },
    {
      question: "What makes your agency different from other marketing companies?",
      answer:
        "Our strength lies in combining creativity with data-driven strategies. We don’t just create campaigns — we create experiences that build long-term brand value and trust.",
    },
    {
      question: "How do you measure the success of your marketing campaigns?",
      answer:
        "We use clear KPIs such as engagement, leads, conversions, and ROI. Regular reports keep you updated and ensure we’re always moving towards your business goals.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="max-w-[1460px] px-6 md:px-16 py-12 mx-auto overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left - Title */}
        <div className="flex-col justify-start items-start">
          <h1 className="text-[48px] font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Frequently
          </h1>
          <h1 className="text-[48px] font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Asked Question
          </h1>
        </div>

        {/* Right - FAQ Accordion */}
        <div className="space-y-4 max-w-7xl">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-lg bg-[#1D1D1D] overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className={`w-full flex text-[20px] cursor-pointer justify-between items-center p-4 text-left font-semibold transition-colors ${
                    isOpen ? "text-white" : "text-[#7C7C7C]"
                  }`}
                >
                  {faq.question}
                  {isOpen ? (
                    <Minus size={22} />
                  ) : (
                    <Plus size={22} />
                  )}
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-96 opacity-100 p-4" : "max-h-0 opacity-0 px-4"
                  }`}
                >
                  <p className="text-[20px] text-white">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
