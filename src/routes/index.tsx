import { lazy } from 'react'
import { Link, Navigate } from 'react-router-dom'

import LoginPage from '@/pages/login'

import HomePage from '@/pages/home'

import { MenuRoute, RoutesType, MenuItem, BreadcrumbMap } from './interface'

const menuRoutes: MenuRoute[] = [

    {
        path: '/',
        element: <Navigate replace to="/home" />
    },

    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/home',
        element: <HomePage />
    },
]


// extract routes for react-router-dom6
const extractRoutes = (menuRoutes: MenuRoute[]) => {
    const recurExtractRoutes = (menuRoutes: MenuRoute[], routes: RoutesType[]) => {
        if (menuRoutes?.length) {
            menuRoutes.forEach((item: MenuRoute) => {
                const { path, auth, element, loader, children } = item
                routes.push({
                    // index,
                    loader,
                    path,
                    element: auth !== false ? element : <div>noAuth</div>,
                    ...(children?.length
                        ? {
                            children: recurExtractRoutes(children, [])
                        }
                        : {})
                })
            })
        }
        return routes
    }
    return recurExtractRoutes(menuRoutes, [])
}

const routes = extractRoutes(menuRoutes);

console.log(routes);

export { routes }