import React from 'react'
import Link from 'next/link'
function DashboardPage() {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <Link href="/dashboard/profile">Go to Profile</Link>
    </div>
  )
}

export default DashboardPage
