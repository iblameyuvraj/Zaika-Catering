"use client"

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@/components/ui/animated-modal";
import { motion } from "framer-motion";

export default function TypewriterEffectSmoothDemo() {
  
  
  const words = [
    {
      text: "Ready",
    },
    {
      text: "to",
    },
    {
      text: "taste",
    },
    {
      text: "the",
    },
    {
      text: "magic?",
      className: "text-orange-500 dark:text-orange-500",
    },
  ];
  const images = [
    "/photo6.jpg",
    "/photo8.jpg",
    "/photo9.avif",
    "/photo3.jpg",
    "/photo1.jpg",
  ];

  return (

    <div className="flex flex-col items-center justify-center h-[40rem] bg-white dark:bg-black">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
        Experience the authentic flavors of Odisha
      </p>
      <TypewriterEffectSmooth words={words} />
      <Modal>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <ModalTrigger className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm font-semibold hover:bg-black hover:text-white transition-all dark:bg-white dark:text-black dark:border-white dark:hover:bg-black dark:hover:text-white">
            Book Now
          </ModalTrigger>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm font-semibold hover:bg-black hover:text-white transition-all dark:bg-black dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">
            <a href="tel:+917077317979">Call Us</a>
          </button>
        </div>
        <ModalBody>
          <ModalContent>
            <h2 className="text-lg font-bold mb-4">Book Now</h2>
            <div className="flex justify-center items-center mb-4">
              {images.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                >
                  <img
                    src={image}
                    alt="modal images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <form className="flex flex-col items-center" onSubmit={e => e.preventDefault()}>
              <div className="w-full flex items-center">

                <a
                  href="/contact"
                  className="px-4 py-2 rounded-xl bg-white text-black border border-black text-sm font-semibold hover:bg-black hover:text-white transition-all dark:bg-white dark:text-black dark:border-white dark:hover:bg-black dark:hover:text-white mb-4 mx-auto block text-center"
                >
                  Contact Us
                </a>
              </div>
            </form>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  )
}
