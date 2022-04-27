import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
const ProtectedRoute = ({isAdmin}) => {
    const {loading, isAuthenticated, user} = useSelector((state) => state.user);
  return (
    <>
        {isAuthenticated ? <Outlet /> : <Navigate to='/login' replace />}
    </>
  )
}

export default ProtectedRoute