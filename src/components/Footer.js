import React from 'react'

export default function Footer() {
  return (
  
    <footer className='h-16 bg-slate-900 flex flex-col'>
     <p className='flex justify-center items-center py-4 text-white'>&copy;All Rights Reserved {new Date().getFullYear()}</p>
   </footer>
   
  )
}

