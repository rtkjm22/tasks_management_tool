'use client'

import { createBoard } from '@/actions/create-board'
import { FormInput } from './form-input'
import { useFormState } from 'react-dom'
import { FormButton } from './form-button'

export const Form = () => {
  const initialState = {
    message: null,
    errors: {}
  }
  const [state, dispatch] = useFormState(createBoard, initialState)

  return (
    <form action={dispatch} className="flex items-center gap-x-2">
      <div className="flex flex-col space-y-2">
        <FormInput errors={state?.errors} />
      </div>
      <FormButton />
    </form>
  )
}
