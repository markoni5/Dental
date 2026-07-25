"use client";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <EmailIcon className="text-blue-500" />,
      label: "Email Us",
      value: "support@mamdental.com",
      link: "mailto:support@mamdental.com"
    },
    {
      icon: <PhoneIcon className="text-blue-500" />,
      label: "Call Support",
      value: "+1 (234) 567-890",
      link: "tel:+1234567890"
    },
    {
      icon: <WhatsAppIcon className="text-blue-500" />,
      label: "WhatsApp",
      value: "+1 (987) 654-321",
      link: "https://wa.me/1987654321"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">Get in Touch</h1>
        <p className="text-xl text-gray-600">
          Have questions about our products or need help with an order? <br />
          Our team of dental specialists is here to help.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Contact Form */}
        <div className="flex-[1.5] bg-white rounded-[40px] p-10 shadow-2xl shadow-blue-500/5 border border-slate-50">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Send a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-gray-400"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@university.edu" 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-gray-400"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">Subject</label>
              <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-600 appearance-none">
                <option>Product Inquiry</option>
                <option>Order Status</option>
                <option>Technical Support</option>
                <option>Others</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">Message</label>
              <textarea 
                rows={5} 
                placeholder="How can we help you today?" 
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-gray-400 resize-none"
              ></textarea>
            </div>
            <button className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-500/30 group">
              Send Message
              <SendIcon className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fontSize="small" />
            </button>
          </form>
        </div>

        {/* Info Cards */}
        <div className="flex-1 space-y-8">
          {/* Quick Contact Info */}
          <div className="bg-slate-900 rounded-[40px] p-10 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <h2 className="text-2xl font-bold mb-8 relative z-10">Contact Information</h2>
            <div className="space-y-8 relative z-10">
              {contactInfo.map((info, i) => (
                <a 
                  key={i} 
                  href={info.link} 
                  className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-white/10 p-3 rounded-xl group-hover:bg-blue-600 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-medium">{info.label}</p>
                    <p className="text-lg font-semibold">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-blue-50 rounded-[40px] p-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Stay Connected</h2>
            <div className="flex gap-4">
              <a href="#" className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm">
                <FacebookIcon />
              </a>
              <a href="#" className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300 shadow-sm">
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Location Hint */}
          <div className="bg-slate-100 rounded-[40px] p-10 flex items-center gap-6">
            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <LocationOnIcon className="text-blue-500" fontSize="large" />
            </div>
            <div>
              <p className="font-bold text-slate-800">Visit Our Pickup Point</p>
              <p className="text-gray-500 text-sm">Main Campus, Dental Faculty Hub</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
