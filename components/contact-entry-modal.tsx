"use client"

import { useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function ContactEntryModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Open on initial mount (homepage entry)
    setIsOpen(true)
  }, [])

  const whatsappHref = "https://wa.me/917077317979"
  const callHref = "tel:+917077317979"

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md bg-white dark:bg-black border border-gray-200 dark:border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-gray-900 dark:text-white">Get in touch</DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-300">
            Contact us directly on WhatsApp or call now. You can also continue to the website.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">WhatsApp</Button>
          </a>
          <a href={callHref} className="w-full">
            <Button variant="secondary" className="w-full">Call Now</Button>
          </a>
          <Button className="w-full" onClick={() => setIsOpen(false)}>Continue</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

