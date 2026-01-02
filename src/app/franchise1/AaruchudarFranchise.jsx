"use client";

import React, { useState } from "react";
import {
  Brain,
  Users,
  Globe,
  ChevronRight,
  Play,
  Menu,
  X,
  Shield,
  Zap,
  TrendingUp,
  Award,
  Clock,
  CheckCircle,
  Heart,
  Activity,
  Compass,
  Sparkles,
} from "lucide-react";

import ExploreDetailsModal from "./ExploreDetails"; // 🔥 ADD THIS

export default function AaruchudarFranchise() {

  // 🔥 MODAL STATE
  const [activeModal, setActiveModal] = useState(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "Own a Lab",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Thank you! Our team will contact you within 24 hours.");
      setFormData({
        name: "",
        email: "",
        interest: "Own a Lab",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  // 🔥 ID IS VERY IMPORTANT
  const franchiseOptions = [
    {
      id: "own-a-lab",
      icon: Brain,
      title: "OWN A LAB",
      subtitle: "Launch a Cognitive Training center",
      description:
        "Build your own centre using neuroscience-based lab systems with full support.",
      options: [
        "Training & Certification",
        "Brand & Marketing Support",
        "Operational Playbooks",
        "Framework Updates",
      ],
      color: "from-cyan-500 to-blue-600",
      gradientBg: "bg-gradient-to-br from-cyan-50 to-blue-50",
      borderColor: "border-cyan-100",
    },
    {
      id: "strategic-investor",
      icon: Users,
      title: "BECOME AN INVESTOR",
      subtitle: "Integrate Aaruchudar Into Your Ecosystem",
      description:
        "Revenue-sharing partnership by embedding our cognitive frameworks.",
      options: [
        "Partner Training",
        "Co-Branded Assets",
        "Integration Support",
        "Ongoing Updates",
      ],
      color: "from-blue-500 to-indigo-600",
      gradientBg: "bg-gradient-to-br from-blue-50 to-indigo-50",
      borderColor: "border-blue-100",
    },
    {
      id: "global-expansion",
      icon: Globe,
      title: "GLOBAL EXPANSION",
      subtitle: "Master Licensing for New Territories",
      description:
        "Exclusive territorial rights to expand Aaruchudar globally.",
      options: [
        "Advanced Certification",
        "Territory Launch Support",
        "Scalable Systems",
        "Priority IP Access",
      ],
      color: "from-indigo-500 to-purple-600",
      gradientBg: "bg-gradient-to-br from-indigo-50 to-purple-50",
      borderColor: "border-indigo-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* ================= OPPORTUNITIES ================= */}
      <div
        id="franchise"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Investment{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
              Opportunities
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {franchiseOptions.map((option) => {
            const Icon = option.icon;
            return (
              <div
                key={option.id}
                className={`${option.gradientBg} border ${option.borderColor} rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all`}
              >
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${option.color} mb-6`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-1">{option.title}</h3>
                <h4 className="text-sm font-semibold text-gray-600 mb-4">
                  {option.subtitle}
                </h4>

                <p className="text-gray-600 mb-6">{option.description}</p>

                <div className="space-y-3 mb-6">
                  {option.options.map((item, i) => (
                    <div key={i} className="flex gap-2 items-center">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* 🔥 EXPLORE DETAILS BUTTON */}
                <button
                  onClick={() => setActiveModal(option.id)}
                  className="w-full py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 flex justify-center items-center gap-2"
                >
                  Explore Details
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= CONTACT ================= */}
      <div
        id="contact"
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 border rounded"
          />
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 border rounded"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-3 border rounded"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded">
            Submit
          </button>
        </form>
      </div>

      {/* ================= 🔥 MODAL RENDER ================= */}
      <ExploreDetailsModal
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        setFormData={setFormData}
      />
    </div>
  );
}
