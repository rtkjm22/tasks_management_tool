'use server'

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { z } from 'zod'

export type State = {
  errors?: {
    title?: string[]
  }
  massage?: string | null
}

const CreateBoard = z.object({
  title: z.string().min(3, {
    message: '最小文字数は3文字です。'
  })
})

export async function createBoard(prevState: State, formData: FormData) {
  const validatedFields = CreateBoard.safeParse({
    title: formData.get('title')
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'フィールドが存在しません。'
    }
  }

  const { title } = validatedFields.data

  try {
    await db.board.create({
      data: {
        title
      }
    })
  } catch (error) {
    return {
      message: 'データベースエラー'
    }
  }

  revalidatePath('/organization/org_2faz8OdcPAOjyh4HBECeiUuaXtn')
  redirect('/organization/org_2faz8OdcPAOjyh4HBECeiUuaXtn')
}
