import { Sidebar } from "../_components/sidebar"

const OrganizationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="pt-24 md:pt-20 px-4 max-w-7xl 2xl:max-w-6xl">
      <div className="flex gap-x-7">
        <div className="w-64 shrink-0 block md:hidden">
          <Sidebar />
        </div>
        {children}
      </div>
    </main>
  )
}

export default OrganizationLayout
