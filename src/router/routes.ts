import React, { lazy, LazyExoticComponent, Suspense } from 'react';

interface RouteType {
    path: string,
    component: LazyExoticComponent<any>,
    exact: boolean,
    title?: string,
    icon?: string,
    children?: RouteType[]
}
const RouterList: RouteType[] = [
    {
        path: '/',
        component: lazy(() => import('../views/Home')),
        exact: true,
        title: '首页'
    },
    {
        path: '/info',
        component: lazy(() => import('../views/Info')),
        exact: true,
        title: '信息'
    }
]
export default RouterList;