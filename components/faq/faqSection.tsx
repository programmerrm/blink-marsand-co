"use client";

import { useState, useRef } from "react";
import { Plus, X } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What can I do with a Blink Account?",
    answer:
      "No, we offer a buy-rate, interchange-plus pricing model giving you the most control over your revenue.",
  },
  {
    question: "How do I get started?",
    answer: "You can get started by signing up and completing onboarding.",
  },
  {
    question: "Is Blink backed by City Bank PLC?",
    answer: "Yes, Blink is backed by City Bank PLC.",
  },
  {
    question: "Can I use Blink for everyday transactions?",
    answer: "Yes, Blink supports everyday payments and transfers.",
  },
  {
    question: "Are pricing tiers 'pick a tier' or 'fill a tier'?",
    answer: "We offer flexible pricing options based on usage.",
  },
  {
    question: "Is there an ACH volume fee?",
    answer: "No, there are no hidden ACH volume fees.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12.5 lg:py-25">
      <div className="container">
        <div className="w-full max-w-175 mx-auto">
          <h2 className="font-inter font-medium text-center mb-6 md:mb-14">
            Quick-fire answers
          </h2>

          <div className="space-y-3 md:space-y-5">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <FAQRow
                  key={index}
                  item={item}
                  isOpen={isOpen}
                  onClick={() => toggle(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQRow({
  item,
  isOpen,
  onClick,
}: {
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-gray-300 pb-3 md:pb-5">
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full text-left cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#BDD630] text-[#00473C]">
            {isOpen ? <X size={16} /> : <Plus size={16} />}
          </span>
          <h6 className="text-lg md:text-[23px] text-[#00473C] font-inter md:leading-8 font-normal">
            {item.question}
          </h6>
        </div>
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen
            ? contentRef.current?.scrollHeight + "px"
            : "0px",
        }}
      >
        <p className="mt-3 ml-10 text-[#00473C] text-sm md:text-[17px] font-inter font-normal md:leading-6.25">
          {item.answer}
        </p>
      </div>
    </div>
  );
}