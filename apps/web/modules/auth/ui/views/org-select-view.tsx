import { OrganizationList } from '@clerk/nextjs'
import React from 'react'

const OrganizationSelectView = () => {
  return (
    <div>
        <OrganizationList 
        afterCreateOrganizationUrl="/"
        afterSelectOrganizationUrl="/"
        hidePersonal

        skipInvitationScreen
        />
    </div>
  )
}

export default OrganizationSelectView