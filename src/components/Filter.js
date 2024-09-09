import {useSearchParams,useNavigate,useLocation} from 'react-router-dom'


const Filter=()=>{

   const [searchParams]=useSearchParams()
   const navigate= useNavigate();
   const location=useLocation()
   const activeFilter=searchParams.get('category') ?? 'pizza'

   const handleFilter=(filter)=>{
      const params=new URLSearchParams(searchParams);
       params.set('category',filter)
      navigate(`${location.pathname}?${params.toString()}`,{replace:true})
   }

    return(
        <div className="border border-gray-500 flex">
            <Button handleFilter={handleFilter} activeFilter={activeFilter} filter='pizza'>
                Pizzas
             </Button>
             <Button  handleFilter={handleFilter} activeFilter={activeFilter} filter='drink'>
                Drinks
             </Button>
             <Button  handleFilter={handleFilter} activeFilter={activeFilter} filter='burger'>
                Burgers
             </Button>
        </div>
    )
}

export default Filter;


function Button({handleFilter,children,activeFilter,filter}){
   return(

    <button  className={`px-5 py-2 hover:bg-gray-900 hover:text-yellow-500 text-white ${filter === activeFilter ? 'bg-slate-600'  : ''} bg-yellow-300 text-slate-900`} onClick={()=>handleFilter(filter)}>
          {children}
    </button>
    
   )
}