import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'
import { Medal } from 'lucide-react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const headingFont = localFont({
  src: '../../public/fonts/NotoSansJP.woff2'
})

const textFont = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          'flex items-center justify-center flex-col',
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          No.1 Task management
        </div>
        <h1 className="text-6xl text-center text-neutral-800 md:text-3xl mb-6">
          Shark helps team move
        </h1>
        <div className="text-6xl md:text-3xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          work forward.
        </div>
      </div>
      <div
        className={cn(
          'text-xl md:text-sm text-neutral-400 mt-4 max-w-2xl md:max-w-xs text-center mx-auto',
          textFont.className
        )}
      >
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works is unique -
        accomplish it all with Shark.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Get Shark for free</Link>
      </Button>
    </div>
  )
}

export default MarketingPage
