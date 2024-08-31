import React from "react";
import { MoveRight } from "lucide-react";
export default function Hero() {
  return (
    <div className="flex justify-center bg-white py-12 px-8">
      <div className="space-y-6 w-1/2 mx-auto px-12 mt-10">
        <div className="image-stack">
          <div className="image-stack__item image-stack__item--top">
            <img
              src="https://images.unsplash.com/photo-1580281657702-257584239a55?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGhvc3BpdGFsfGVufDB8fDB8fHww"
              alt="A portrait of a girl under hanging flowers."
              className="rounded-lg"
            />
          </div>
          <div className="image-stack__item image-stack__item--bottom">
            <img
              src="https://images.unsplash.com/photo-1611587266737-cc128ffe2946?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Medical equipment"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="w-1/2 pr-12 mt-10">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800 mb-9 relative inline-block">
            Welcome to MedAssist Billing Solutions
            <span className="absolute left-0 top-9 w-0 h-1 bg-purple-500 rounded-full animate-expand"></span>
          </h1>
          <p className="text-md text-gray-400 leading-relaxed">
            We are the leading Healthcare Revenue Cycle Management Service
            Provider with over 5 Years of Experience and serve a client-base
            ranging from individual to group practice and spans from the west to
            east coast of the USA.
          </p>
        </div>
        <div className="mt-10">
          <h1 className="text-2xl font-semibold text-gray-800 mb-9 relative inline-block">
            Join Us Today
            <span className="absolute left-0 top-9 w-0 h-1 bg-purple-500 rounded-full animate-expand"></span>
          </h1>
          <p className="text-md text-gray-400 leading-relaxed">
            Take control of your Medical Billing process with our advanced
            solutions and manage your revenue effortlessly with our expert
            billing service.
          </p>
          <div >
          <button className="bg-purple-700 hover:bg-purple-500 text-white font-semibold py-2 px-4 rounded mt-6 inline-flex items-center">
 <span className="mx-2"> Contact Us </span><MoveRight size={16} />
</button></div>
        </div>
      </div>
    </div>
  );
}
