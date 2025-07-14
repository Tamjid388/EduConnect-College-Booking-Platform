"use client"
import useCurrentUser from '@/hooks/useCurrentuser'
import useUnifiedUser from '@/hooks/useUnifiedUser';
import React from 'react'

export default function Demo() {
    const {user}=useCurrentUser()
    console.log(user);
      const { user:me, loading, source } = useUnifiedUser();
  return (
    <div>
      <h1 className="text-3xl">  Demo</h1>
          {user ? (
          <li className="user-info">
             {user.name || user.email} ({source})
          </li>
        ) : (
          <li><a href="/login">Login</a></li>
        )}
    </div>
  )
}
