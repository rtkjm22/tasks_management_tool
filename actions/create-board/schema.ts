import { z } from 'zod'

export const CreateBoard = z.object({
  title: z
    .string({
      required_error: 'タイトルは必須です。',
      invalid_type_error: 'タイトルは必須です。'
    })
    .min(3, {
      message: 'タイトルは最低3文字以上必要です。'
    })
})
