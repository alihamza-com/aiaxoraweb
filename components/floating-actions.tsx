"use client"

import { motion } from "framer-motion"
import { MessageCircle, Slack } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingActions() {
  return (
    <div className="fixed bottom-28 right-6 z-50 flex flex-col gap-4">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          size="lg"
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-green-500/25 transition-all duration-300"
          onClick={() => window.open("https://wa.me/+923245237429", "_blank")}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          size="lg"
          className="w-14 h-14 rounded-full bg-purple-500 hover:bg-purple-600 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          onClick={() => window.open("https://join.slack.com/t/axorawebsolutions/shared_invite/zt-3b1tg11n9-AWdaDuRifLso__we~1K17A", "_blank")}
        >
          <Slack className="w-6 h-6" />
        </Button>
      </motion.div>
    </div>
  )
}
