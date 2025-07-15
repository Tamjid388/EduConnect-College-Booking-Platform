"use client"

import useUnifiedUser from '@/hooks/useUnifiedUser';
import React from 'react'

export default function Demo() {
  
      const { user, source } = useUnifiedUser();
  return (
    <div>
      <h1 className="text-3xl">  Demo</h1>
          {user ? (
          <li className="user-info">
             { user.email} ({source})
          </li>
        ) : (
          <li><a href="/login">Login</a></li>
        )}
    </div>
  )
}
