'use client'

import { createBoard } from '@/actions/create-board'

import { useAction } from '@/hooks/use-action'
import { FormInput } from '@/components/form/form-input'
import { FormSubmit } from '@/components/form/form-submit'

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

    console.log({ title })
    execute({ title })
  }

  const initialState = {
    message: null,
    errors: {}
  }
  return (
    <form action={onSubmit} className="flex items-center gap-x-2">
      <div className="flex flex-col space-y-2">
        <FormInput label="Board Title" id="title" errors={fieldErrors} />
      </div>
      <FormSubmit>Savea</FormSubmit>
    </form>
  )
}
