"use client";
import Image from "next/image";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import StarsIcon from "@mui/icons-material/Stars";
import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";

export default function AboutPage() {
  const values = [
    {
      icon: <StarsIcon className="text-blue-500" fontSize="large" />,
      title: "Premium Quality",
      description: "We source only the highest grade instruments used by professionals worldwide."
    },
    {
      icon: <SchoolIcon className="text-blue-500" fontSize="large" />,
      title: "Student Focused",
      description: "Our prices and packages are specifically designed for the needs of dental students."
    },
    {
      icon: <GroupsIcon className="text-blue-500" fontSize="large" />,
      title: "Community Driven",
      description: "Founded by dental professionals who understand the journey from student to practitioner."
    }
  ];

  return (
    <div className="min-h-screen py-16 px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-6xl font-bold text-slate-900 mb-6">
          Supporting the <span className="text-blue-600">Next Generation</span> <br /> of Dentists
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          MAM Dental Store was born out of a simple observation: dental students deserve 
          professional-grade tools without the professional-grade price tag.
        </p>
      </div>

      {/* Story Section */}
      <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
        <div className="flex-1">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-50 rounded-full -z-10"></div>
            <Image 
              src="/dentalBaner.png" 
              alt="Our Story" 
              width={600} 
              height={400} 
              className="rounded-3xl shadow-2xl relative z-10"
            />
          </div>
        </div>
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl font-bold text-slate-800">Our Story</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Starting in a small campus corner, we realized that accessing specialized dental equipment 
            during university was often a hurdle rather than a step forward. High costs, long shipping 
            times, and uncertain quality often plagued the student experience.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Today, MAM Dental is the leading supplier for dental students across the region, 
            providing everything from basic instruments to advanced typodonts, delivered 
            directly to your university doorstep.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="flex items-center space-x-2">
              <CheckCircleOutlineIcon className="text-blue-500" />
              <span className="font-semibold text-slate-700">ISO Certified Tools</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircleOutlineIcon className="text-blue-500" />
              <span className="font-semibold text-slate-700">Campus Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircleOutlineIcon className="text-blue-500" />
              <span className="font-semibold text-slate-700">Student Warranty</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircleOutlineIcon className="text-blue-500" />
              <span className="font-semibold text-slate-700">Expert Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-slate-50 rounded-[40px] p-16 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Why MAM Dental?</h2>
          <p className="text-gray-500">The values that drive us to serve better.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((v, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="mb-6 bg-blue-50 p-4 rounded-2xl">
                {v.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{v.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 rounded-3xl p-16 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <h2 className="text-4xl font-bold mb-6 relative z-10">Ready to start your journey?</h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
          Join thousands of dental students who trust MAM Dental for their educational needs.
        </p>
        <div className="flex justify-center gap-6 relative z-10">
          <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg shadow-blue-900/40">
            Start Shopping
          </button>
          <button className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
