import Link from "next/link";

export default function DashboardLayout({ feed, stats, children, tab1, tab2 }) {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold mb-4">Dashboard Layout</h1>

        <div className="flex gap-4 mx-5">
          <div className="flex-[2] bg-blue-500 p-4 rounded text-white">
            {feed}
          </div>

          <div className="flex-[1] bg-green-400 p-4 rounded">
            {stats}
          </div>
        </div>

        <div className="mt-4">{children}</div>
      </div>

      {/* Navigation */}
      <nav className="mt-6 mx-5">
        <Link href="/dashboard-main/tab1" className="mr-4 text-blue-500">
          Tab 1
        </Link>
        <Link href="/dashboard-main/tab2" className="text-blue-500">
          Tab 2
        </Link>
      </nav>

      {/* Slots */}
      <div className="mt-4 flex gap-4 mx-5">
        <div className="flex-1 bg-gray-100 p-4 rounded">{tab1}</div>
        <div className="flex-1 bg-gray-200 p-4 rounded">{tab2}</div>
      </div>
    </>
  );
}