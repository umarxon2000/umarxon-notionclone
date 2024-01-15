import React from 'react'

export const Logo = () => {
  return (
    <div className='flex items-center space-x-2 '>
      <img src="/logo.svg" alt=" logo" width={50} height={50} className='object-cover  dark:hidden' />
      <img src="/logo-dark.svg" alt=" logo" width={50} height={50} className='object-cover hidden dark:block' />
      <p className='font-semibold text-xl'>Notion</p>
    </div>
  )
}
