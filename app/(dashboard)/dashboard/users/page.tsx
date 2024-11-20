import Link from "next/link"


function page() {
  return (
    <div>
      <h1>dashboard users</h1>
      <ul>
        <li><Link href="/dashboard/users/1">user1</Link></li>
        <li><Link href="/dashboard/users/2">user2</Link></li>
        <li><Link href="/dashboard/users/3">user3</Link></li>
        <li><Link href="/dashboard/users/4">user4</Link></li>
      </ul>
    </div>
  )
}

export default page