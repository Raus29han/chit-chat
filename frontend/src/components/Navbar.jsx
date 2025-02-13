import React from 'react'
import { useAuthStore } from "../store/useAuthStore";
import { Link } from 'react-router-dom';
import { LogOut, MessageSquare, Settings, User2 } from 'lucide-react';

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  
  return (
    <header
    className='bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg bg-base-100/80'
    >
      <div className='containert mx-auto px-24 h-16'>
        <div className='flex items-center justify-between h-full'>
          <div className='flex items-center gap-8'>
            <Link to = "/" className='flex items-center gap-2.5 hover:opacity-80 transition-all'>
              <div className='size-9 rounded-lg bg-primary/10 flex items-center justify-center'>
              <img src='/logo.svg' className='w-5 h-5 text-primary' alt='logo' />
              </div>
              <h1 className='text-lg font-bold'>ChatApp</h1>
            </Link>
          </div>

          <div className='flex items-center gap-2'>
            <Link to="/settings" className = {`btn btn-sm gap-2 transition-colors rounded-md`}>
            <Settings className='size-4' />
            <span className = "sm-inline">Settings</span>
            </Link>
            {authUser && (
              <>
              <Link to="/profile" className = 'btn btn-sm gap-2 rounded-md'>
                <User2 className='size-5' />
                <span className = "sm-inline">Profile</span>
              </Link>
              <button onClick={logout} className = 'flex items-center gap-2'>
                <LogOut className = "size-5" />
                <span className = "sm-inline">Logout</span>
              </button>
              </>
              
            )}

          </div>

        </div>
      </div>
    </header>
  )
}

export default Navbar