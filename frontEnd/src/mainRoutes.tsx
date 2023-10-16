import { useRoutes } from  'react-router-dom'
import Home from './pages/home/home'
import Private from './pages/private/private'
import { RequireAuth } from './contexts/Auth/RequireAuth'


export const MainRoutes = () => useRoutes([
  {path: '/', element:<Home />},
  {path: '/private', element: <RequireAuth><Private /></RequireAuth>},
    
])