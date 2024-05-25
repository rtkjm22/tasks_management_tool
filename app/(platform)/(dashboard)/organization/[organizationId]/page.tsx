import { Separator } from "@/components/ui/separator"
import { Info } from "./_components/info"
import { BoardList } from "./_components/board-list"

const organizationIdPage = async () => {
  return <div className="w-full mb-20">
    <Info />
    <Separator className="my-4"/>
    <div className="px-4 md:px-2">
      <BoardList />
    </div>
  </div>
}

export default organizationIdPage
