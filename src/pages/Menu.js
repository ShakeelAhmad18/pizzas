import Navbar from '../components/Navbar'
import Loader from '../components/Spinner'
import { getMenu } from '../services/menuServices'
import { useQuery } from '@tanstack/react-query'
import MenuItem from '../components/MenuItem'
import Filter from '../components/Filter'
import {useSearchParams} from 'react-router-dom'

export default function Menu() {
   const [searchParams]=useSearchParams()
   const filter=searchParams.get('category')

  document.title = 'Menu'

  const { isPending, data: menu } = useQuery({
    queryKey: ['menu'],
    queryFn: getMenu
  })

  if (isPending) return <Loader />

   let displayItems=menu;
   if(filter === 'pizza') displayItems=menu.filter((menu)=>menu.category === 'pizza')
   if(filter === 'drink') displayItems=menu.filter((menu)=>menu.category === 'drink')
   if(filter === 'burger') displayItems=menu.filter((menu)=>menu.category === 'burger')
   
    if (displayItems.length === 0) {
      return <div>No menu available</div>; // Handle the case where no cabins match the filter
    }

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
      <div className="flex justify-end mr-11 mt-8 font-serif">
        { <Filter/> }
       </div>
      <div className="flex flex-col lg:flex-row gap-4 mt-10 mr-10 ml-10">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayItems.map(item => <MenuItem pizza={item} key={item._id}  filter={filter} />)}
        </div>
      </div>
    </div>
  )
}
