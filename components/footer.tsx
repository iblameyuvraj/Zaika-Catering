"use client"

import { Facebook, Instagram, MessageCircle, Phone, Mail } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function Footer() {
  return (
    <footer className="bg-black text-gray-200 py-20" id="contact">
      {/* Subtle White Strip */}
      <div className="w-full h-1 bg-gradient-to-r from-white/0 via-white/30 to-white/0 mx-auto mb-12"></div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Company Info */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <img
                src="/Untitled.jpeg"
                alt="Zaika Catering Logo"
                className="w-13 h-10 rounded-lg object-cover"
              />
              <span className="font-bold text-2xl tracking-wide">Zaika Catering</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Providing premium catering services across Odisha with authentic flavors and exceptional presentation.<br />
              Making your special moments <span className="text-white/60 font-semibold">unforgettable</span> with our culinary expertise.
            </p>
            <div className="flex  gap-3 pt-3">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 rounded-full bg-white/10 hover:bg-green-500 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="w-5 h-5 text-white group-hover:scale-110 transition-transform"
                >
                  <path d="M16 3C9.373 3 4 8.373 4 15c0 2.637.86 5.08 2.34 7.09L4 29l7.18-2.31A12.93 12.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.89-.52-5.54-1.5l-.39-.23-4.27 1.37 1.4-4.14-.25-.4A9.93 9.93 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.36.98 2.68 1.12 2.87.14.18 1.93 2.95 4.68 4.02.65.28 1.16.45 1.56.58.65.21 1.24.18 1.7.11.52-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z" />
                </svg>
              </a>

              <a
                href="https://facebook.com/zaikacatering"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 rounded-full bg-white/10 hover:bg-blue-600 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="https://instagram.com/zaikacatering"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 rounded-full bg-white/10 hover:bg-pink-500 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Middle Column - Services Links */}
          <div className="space-y-5">
            <h3 className="font-semibold text-xl text-white tracking-wide mb-2">Our Services</h3>
            <div className="space-y-2">
              <a href="/services" className="block text-gray-300 hover:text-white transition-colors font-medium">
                Wedding Catering
              </a>
              <a href="/services" className="block text-gray-300 hover:text-white transition-colors font-medium">
                Birthday Parties
              </a>
              <a href="/services" className="block text-gray-300 hover:text-white transition-colors font-medium">
                Corporate Events
              </a>
              <a href="/services" className="block text-gray-300 hover:text-white transition-colors font-medium">
                Festival Catering
              </a>
              <a href="/services" className="block text-gray-300 hover:text-white transition-colors font-medium">
                Private Dining
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="space-y-6">
            <h3 className="font-semibold text-xl text-white tracking-wide mb-2">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-white " />
                <span className="text-gray-400"><a href="tel:+91 7077317979">+91 7077317979</a></span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-white hover:animate-pulse" />
                <span className="text-gray-400"><a href="mailto:mdwadud7777@gmail.com">mdwadud7777@gmail.com</a></span>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="border-t border-white/10 mt-14 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Zaika Catering. Created by{" "}
            <a
              href="https://zentha.in"
              className="text-white/80 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zentha Studio
            </a>
          </p>
        </div>

      </div>
    </footer>
  )
}
