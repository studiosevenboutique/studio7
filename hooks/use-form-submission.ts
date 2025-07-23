import { useState } from 'react'

interface FormSubmissionState {
  isSubmitting: boolean
  isSuccess: boolean
  isError: boolean
  message: string
}

export function useFormSubmission() {
  const [state, setState] = useState<FormSubmissionState>({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: ''
  })

  const submitForm = async (formData: FormData, endpoint: string) => {
    setState({ isSubmitting: true, isSuccess: false, isError: false, message: '' })

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setState({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
          message: 'Thank you! Your submission has been sent successfully.'
        })
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      setState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'Sorry, there was an error sending your submission. Please try again.'
      })
    }
  }

  const resetState = () => {
    setState({ isSubmitting: false, isSuccess: false, isError: false, message: '' })
  }

  return { ...state, submitForm, resetState }
}
