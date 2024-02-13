"use client";
import React  from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import  Link  from 'next/link';
export default function Navbar() {
   
  return (
    <div className='d-flex content-start flex-col'>
        <Link href="/option1" className='btn btn-info'>Option1</Link>
        <Link href="/option2" className='btn btn-info'>Option2</Link>
        <Link href="/option3" className='btn btn-info'>Option3</Link>
      </div>
  )
}
