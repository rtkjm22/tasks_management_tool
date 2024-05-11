'use client'

import { createBoard } from '@/actions/create-board'
import { FormInput } from './form-input'
import { useFormState } from 'react-dom'
import { FormButton } from './form-button'
import { useAction } from '@/hooks/use-action'

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, 'SUCCESS!!')
    },
    onError: (error) => {
      console.error(error)
    }
  })

  const onSubmit = (formData: FormData) => {
    const title = formData.get('title') as string
    execute({ title })
  }

  const initialState = {
    message: null,
    errors: {}
  }
  return (
    <form action={onSubmit} className="flex items-center gap-x-2">
      <div className="flex flex-col space-y-2">
        <FormInput errors={fieldErrors} />
      </div>
      <FormButton />
    </form>
  )
}
