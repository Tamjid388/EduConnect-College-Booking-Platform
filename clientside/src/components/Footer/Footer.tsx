"use client"
import { Github, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Branding and Socials */}
        <div className="md:col-span-2">
          <h3 className="text-white text-xl font-bold">Educonnect</h3>
          <p className="text-sm mt-2">
            Educonnect helps students easily explore, book, and review top colleges
            with research, admission, and facility details at their fingertips.
          </p>
          <div className="flex space-x-4 mt-4">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Navigation Columns */}
        <div>
          <h4 className="text-white font-semibold mb-2">Explore</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Colleges</a></li>
            <li><a href="#" className="hover:text-white">Admission</a></li>
            <li><a href="#" className="hover:text-white">My College</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Support</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Contact</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="mailto:support@educonnect.com" className="hover:text-white">support@educonnect.com</a></li>
            <li><a href="#" className="hover:text-white">Twitter</a></li>
            <li><a href="#" className="hover:text-white">GitHub</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} Educonnect. Built with  by Tamjid Ahmed & Team.
      </div>
    </footer>
  )
}
