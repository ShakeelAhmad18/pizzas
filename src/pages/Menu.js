import Navbar from '../components/Navbar'
import Loader from '../components/Spinner'
import { getMenu } from '../services/menuServices'
import { useQuery } from '@tanstack/react-query'
import MenuItem from '../components/MenuItem'

export default function Menu() {

  document.title = 'Menu'

  const { isPending, data: menu } = useQuery({
    queryKey: ['menu'],
    queryFn: getMenu
  })

  if (isPending) return <Loader />

  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <div className="text-center">
        <h1 className="text-4xl font-bold mt-10">OUR MENU</h1>
        <p className="text-gray-400 mt-2">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
        </p>
        <p className='text-gray-400'>there live the blind texts.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 mt-10 mr-10 ml-10">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menu.map(item => <MenuItem pizza={item} key={item._id} />)}
        </div>
      </div>
    </div>
  )
}
