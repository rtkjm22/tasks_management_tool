import { OrganizationSwitcher } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"

const organizationIdPage = () => {
  const {userId, orgId} = auth()

  return (
    <div>
      <OrganizationSwitcher hidePersonal />
    </div>
  )
}

export default organizationIdPage