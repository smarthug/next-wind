import SideBar from './SideBar'
import ThemeIcon from './ThemeIcon'

export default function Home() {
  return (
    <div className='flex'>
      <SideBar />

      <div className=''>
        
      </div>

      <header className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="logo.png" alt="logo" className="w-8 h-8 mr-2" />
          <a href="#" className="text-lg font-semibold">Company Name</a>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-yellow-500">Home</a></li>
            <li><a href="#" className="hover:text-yellow-500">About</a></li>
            <li><a href="#" className="hover:text-yellow-500">Services</a></li>
            <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
            <ThemeIcon />
          </ul>
        </nav>
      </header>
    </div>
  )
}
