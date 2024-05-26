import { Hint } from '@/components/hint'
import { HelpCircle, User2 } from 'lucide-react'

export const BoardList = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center font-semibold text-lg text-neutral-700">
        <User2 className="h-6 w-6 mr-2" />
        Your Boards
      </div>
      <div className="grid grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4">
        <div role='button' className='aspect-video relative h-full w-full bg-muted rounded-sm flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition'>
          <p className='text-sm'>Create new board</p>
          <span className='text-xs'>
            5 remaining
          </span>
          <Hint
            sideOffset={40}
            description={`フリープランでは5つまでボードを作成することができます。アップグレードすると無制限にボードを追加することができます。`}
          >
            <HelpCircle 
              className='absolute bottom-2 right-2 h-[14px] w-[14px]'
            />
          </Hint>
        </div>
      </div>
    </div>
  )
}
// https://youtu.be/pRybm9lXW2c?t=17603