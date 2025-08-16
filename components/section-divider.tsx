"use client"

import { motion } from "framer-motion"

interface SectionDividerProps {
  type?: "wave" | "organic" | "geometric"
  className?: string
}

export default function SectionDivider({ type = "wave", className = "" }: SectionDividerProps) {
  const renderDivider = () => {
    switch (type) {
      case "wave":
        return (
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <motion.path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="currentColor"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        )
      case "organic":
        return (
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <motion.path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              fill="currentColor"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        )
      case "geometric":
        return (
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <motion.polygon
              points="0,0 0,120 300,120 600,60 900,120 1200,120 1200,0"
              fill="currentColor"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        )
      default:
        return null
    }
  }

  return <div className={`relative w-full h-24 text-white/10 ${className}`}>{renderDivider()}</div>
}
