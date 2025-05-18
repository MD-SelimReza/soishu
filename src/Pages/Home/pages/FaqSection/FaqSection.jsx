import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { FaChevronUp, FaMinus, FaPlus } from 'react-icons/fa';

const faqs = [
  {
    question: 'What types of real estate professionals do you work with?',
    answer:
      'We work with realtors, brokers, agencies, property managers, and real estate coaches, helping them build a strong brand, attract leads, and grow their business.',
  },
  {
    question: 'What services do you offer?',
    answer:
      'We offer branding and marketing services, including logo design, digital business cards, and website development.',
  },
  {
    question:
      'What’s the difference between one-time services and subscription plans?',
    answer:
      'Our one-time services are perfect for real estate professionals who need branding, marketing, or web solutions as a single project. Our subscription plans offer unlimited design and marketing support to keep your business growing month after month.',
  },
  {
    question: 'How does the subscription model work?',
    answer:
      'With our subscription plans, you get unlimited branding, marketing, and design requests. Simply submit your requests, and we’ll deliver high-quality designs fast, no hourly rates or hidden fees.',
  },
  {
    question: 'How does the subscription model work?',
    answer:
      'With our subscription plans, you get unlimited branding, marketing, and design requests. Simply submit your requests, and we’ll deliver high-quality designs fast, no hourly rates or hidden fees.',
  },
  {
    question: 'Can I request custom services that aren’t listed?',
    answer:
      'Yes! If you need a custom branding, marketing, or web solution, let us know. We’ll work with you to create a tailored strategy that fits your goals.',
  },
  {
    question: 'How do I get started?',
    answer:
      'It’s simple! Choose a one-time service or subscription plan, submit your request, and we’ll take care of the rest, so you can focus on closing more deals.',
  },
];

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="max-w-[1440px] px-5 mx-auto mb-24 pt-8">
        <div className="flex justify-center items-center flex-col mb-16">
          <p className="uppercase bg-[#ecdbcd] text-[#b26729] w-fit text-center px-2.5 py-0.5 text-sm rounded-full">
            Frequently ask questions
          </p>
          <h1 className="lg:text-5xl text-4xl font-semibold lg:mt-8 mt-5 text-center">
            You ask? We answer
          </h1>
        </div>
        <div className="w-full mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-[#ecdbcd] pb-4 cursor-pointer"
            >
              <div
                className="flex justify-between items-center gap-8 py-4"
                onClick={() => toggleFAQ(index)}
              >
                <p className="w-full text-[#2f3133] text-left font-medium text-2xl text-darkIndigo">
                  {faq.question}
                </p>
                {openIndex === index ? (
                  <AiOutlineMinus className="w-5 h-5 text-[#2f3133]" />
                ) : (
                  <AiOutlinePlus className="w-5 h-5 text-[#2f3133]" />
                )}
              </div>
              <div
                className={`transition-all overflow-hidden duration-300 ${
                  openIndex === index
                    ? 'max-h-40 opacity-100 mb-4'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-[#2f3133]">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
