"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cookie, Settings, X, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  functional: boolean
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem("axora-cookie-consent")
    if (!consent) {
      // Show banner after 3 seconds to avoid immediate popup
      setTimeout(() => setShowBanner(true), 3000)
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    }
    setPreferences(allAccepted)
    localStorage.setItem("axora-cookie-consent", JSON.stringify(allAccepted))
    localStorage.setItem("axora-cookie-consent-date", new Date().toISOString())
    setShowBanner(false)
    setShowSettings(false)
  }

  const handleAcceptSelected = () => {
    localStorage.setItem("axora-cookie-consent", JSON.stringify(preferences))
    localStorage.setItem("axora-cookie-consent-date", new Date().toISOString())
    setShowBanner(false)
    setShowSettings(false)
  }

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    }
    setPreferences(onlyNecessary)
    localStorage.setItem("axora-cookie-consent", JSON.stringify(onlyNecessary))
    localStorage.setItem("axora-cookie-consent-date", new Date().toISOString())
    setShowBanner(false)
    setShowSettings(false)
  }

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "necessary") return // Can't disable necessary cookies
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4"
          >
            <Card className="bg-white/95 backdrop-blur-lg border border-gray-200 shadow-2xl max-w-4xl mx-auto rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <Cookie className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">🍪 We use cookies</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      We use cookies to enhance your browsing experience, serve personalized content, and analyze our
                      traffic. By clicking "Accept All", you consent to our use of cookies for analytics and marketing.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        onClick={handleAcceptAll}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold"
                      >
                        Accept All
                      </Button>
                      <Button
                        onClick={() => setShowSettings(true)}
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                      >
                        <Settings className="w-4 h-4 mr-2" />
                        Customize
                      </Button>
                      <Button
                        onClick={handleRejectAll}
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                      >
                        Reject All
                      </Button>
                    </div>
                  </div>
                  <Button
                    onClick={() => setShowBanner(false)}
                    variant="ghost"
                    size="sm"
                    className="text-gray-500 hover:text-gray-700 p-2"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Cookie Preferences</h2>
                  <Button
                    onClick={() => setShowSettings(false)}
                    variant="ghost"
                    size="sm"
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  We use cookies to provide you with the best possible experience. You can review and modify your
                  preferences at any time.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      key: "necessary" as keyof CookiePreferences,
                      title: "Necessary Cookies",
                      description: "Essential for the website to function properly. Cannot be disabled.",
                      required: true,
                    },
                    {
                      key: "functional" as keyof CookiePreferences,
                      title: "Functional Cookies",
                      description: "Enable enhanced functionality and personalization.",
                      required: false,
                    },
                    {
                      key: "analytics" as keyof CookiePreferences,
                      title: "Analytics Cookies",
                      description: "Help us understand how visitors interact with our website.",
                      required: false,
                    },
                    {
                      key: "marketing" as keyof CookiePreferences,
                      title: "Marketing Cookies",
                      description: "Used to track visitors and display relevant ads.",
                      required: false,
                    },
                  ].map((cookie) => (
                    <div key={cookie.key} className="flex items-start justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{cookie.title}</h3>
                        <p className="text-sm text-gray-600">{cookie.description}</p>
                      </div>
                      <div className="ml-4">
                        <button
                          onClick={() => togglePreference(cookie.key)}
                          disabled={cookie.required}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            preferences[cookie.key] ? "bg-blue-600" : cookie.required ? "bg-gray-300" : "bg-gray-200"
                          } ${cookie.required ? "cursor-not-allowed" : "cursor-pointer"}`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              preferences[cookie.key] ? "translate-x-6" : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 mt-8">
                  <Button
                    onClick={handleAcceptSelected}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold"
                  >
                    <Check className="w-4 h-4 mr-2" />
                    Save Preferences
                  </Button>
                  <Button
                    onClick={handleAcceptAll}
                    variant="outline"
                    className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                  >
                    Accept All
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
