import React from 'react'

export default function Header() {
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div>
              <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="REALTOR LOGO" className='h-5' />
            </div>
            <div>
                <ul className='flex space-x-10'>
                    <li>Home</li>
                    <li>Offers</li>
                    <li>Sign In</li>
                </ul>
            </div>
        </header>
    </div>
  )
}