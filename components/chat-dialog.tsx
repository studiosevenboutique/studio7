"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, MessageCircle } from "lucide-react"

interface ChatDialogProps {
  phoneNumber: string
}

export default function ChatDialog({ phoneNumber }: ChatDialogProps) {
  const [isVisible, setIsVisible] = useState(false)

  // Show chat dialog after 3 seconds
  useEffect(() => {
    console.log("ChatDialog useEffect running...")
    const timer = setTimeout(() => {
      console.log("Timer fired, setting isVisible to true")
      setIsVisible(true)
    }, 3000)

    return () => {
      console.log("Cleanup timer")
      clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    console.log("Close button clicked")
    setIsVisible(false)
  }

  console.log("ChatDialog render - isVisible:", isVisible)

  if (!isVisible) {
    console.log("Not visible, returning null")
    return null
  }

  console.log("Rendering chat dialog!")

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 w-80 bg-white rounded-lg shadow-lg border border-gray-200"
      style={{ zIndex: 9999 }}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50 rounded-t-lg">
        <div className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5 text-gray-700" />
          <h3 className="font-medium text-gray-700">Chat with Studio Seven</h3>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleClose}
          className="h-8 w-8 p-0"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="p-4">
        <p className="text-sm text-gray-600 mb-4">
          👋 Hi there! This is a test chat dialog. It should appear after 3 seconds.
        </p>
        <Button onClick={handleClose} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          Close Chat
        </Button>
      </div>
    </div>
  )
}