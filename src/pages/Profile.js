import {useContext} from 'react'
import { UserContext } from '../context/UserContext';



const Profile=()=>{

   
    const {authUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
    }

   return (
    <form className='mt-10' onSubmit={handleSubmit}>
     <h1 className='text-3xl text-gray-100 flex items-center mb-5 font-serif ml-20'>Profile</h1>
    <label className="form-control w-full max-w-xs">
    <div className="label">
      <span className="label-text text-gray-100 font-serif font-semibold ml-20">Name</span>
    </div>
    <input type="text" placeholder="Type here" value={authUser.name} className="input ml-20 input-bordered w-full" onChange={''} />
    <div className="label">
        <span className="label-text text-gray-100 font-serif font-semibold ml-20">Email</span>
    </div>
     <input type="text" placeholder="Type here" value={authUser?.email} className="input ml-20 input-bordered w-full disabled" onChange={''} />
  </label>
  <button className='btn btn-secondary flex items-center mt-5 hover:text-slate-800 ml-20'>Update Profile</button>
  </form>
   )
}


export default Profile;