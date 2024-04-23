import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full p-4 border-t bg-slate-100">
      <div className="mx-auto flex items-center w-full justify-between max-w-7xl">
        <Logo />
        <div className="space-x-4 block w-auto md:flex md:w-full items-center justify-between">
          <Button size="sm" variant="ghost">
            Privacy Policy
          </Button>
          <Button size="sm" variant="ghost">
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  )
}
