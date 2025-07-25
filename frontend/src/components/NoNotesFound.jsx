import {  NotebookIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

export const NoNotesFound = () => {
  return (
    <div className='flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center'>
      <div className='bg-primary/10 rounded-full p-8'>
        <NotebookIcon className='size-10 text-primary' />
      </div>
      <h3 className='text-2xl font-bold'>No Notes yet</h3>
      <p className='text-base-content/70'>
        Ready to organize your thoughts,then create your first note to get started
      </p>
      <Link to='/create' className='btn btn-primary'>Create your first Note</Link>
    </div>
  )
}
