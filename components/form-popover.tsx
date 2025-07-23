"use client"

import { CheckCircle, X, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FormPopoverProps {
  isOpen: boolean
  isSuccess: boolean
  isError: boolean
  message: string
  onClose: () => void
}

export function FormPopover({ isOpen, isSuccess, isError, message, onClose }: FormPopoverProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full mx-4 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {isSuccess && (
              <CheckCircle className="h-6 w-6 text-green-600" />
            )}
            {isError && (
              <AlertCircle className="h-6 w-6 text-red-600" />
            )}
            <h3 className="text-lg font-medium text-charcoal">
              {isSuccess ? "Success!" : "Error"}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="text-charcoal/60 hover:text-charcoal transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <p className="text-charcoal/80 mb-6 text-sm leading-relaxed">
          {message}
        </p>
        
        <div className="flex justify-end">
          <Button
            onClick={onClose}
            className="bg-charcoal text-white hover:bg-charcoal/90 rounded-full px-6 py-2"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}
