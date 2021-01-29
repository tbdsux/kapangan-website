import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="py-6 w-11/12 mx-auto flex items-center justify-between">
      <div className="flex items-center">
        <div className="relative h-20 w-20 mr-4">
          <Image
            src="/images/logo.jpg"
            alt="Municipality of Kapangan Logo"
            layout="fill"
          />
        </div>
        <div>
          <h1 className="font-serif font-black tracking-wide text-2xl text-gray-700">
            Municipality of Kapangan
          </h1>
          <p className="mt-1 tracking-wide text-lg text-gray-500">
            [Concept Website for Kapangan]
          </p>
        </div>
      </div>
      <ul className="flex text-lg text-gray-800">
        <li className="mx-4">
          <a href="#" className="hover:text-yellow-500">
            Home
          </a>
        </li>
        <li className="mx-4">
          <a href="#" className="hover:text-yellow-500">
            Blog
          </a>
        </li>
        <li className="mx-4">
          <a href="#" className="hover:text-yellow-500">
            Tourism
          </a>
        </li>
        <li className="mx-4">
          <a href="#" className="hover:text-yellow-500">
            Profile
          </a>
        </li>
        <li className="mx-4">
          <a href="#" className="hover:text-yellow-500">
            Barangays
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">News & COVID19</a>
        </li>
      </ul>
    </nav>
  )
}
