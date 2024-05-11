'use server'
import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs/server'
import { InputType, ReturnType } from './types'
import { revalidatePath } from 'next/cache'
import { createSafeAction } from '@/lib/create-safe-action'
import { CreateBoard } from './schema'

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId } = auth()

  if (!userId) {
    return {
      error: '権限エラー'
    }
  }

  const { title } = data
  let board

  try {
    board = await db.board.create({
      data: {
        title
      }
    })
  } catch {
    return {
      error: 'ボードの作成失敗'
    }
  }

  revalidatePath(`/board/${board.id}`)
  return { data: board }
}

export const createBoard = createSafeAction(CreateBoard, handler)
