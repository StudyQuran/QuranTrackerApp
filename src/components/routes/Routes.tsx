import React, { useState } from 'react'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

const Routes: React.FC = () => {
   const [isAuthenticated, setIsAuthenticated] = useState(false)
   return <>{isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}</>
}

export default Routes
