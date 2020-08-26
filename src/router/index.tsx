import React, { lazy, LazyExoticComponent, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  RouterList from './routes';

interface RouteType {
    path: string,
    component: LazyExoticComponent<any>,
    exact: boolean,
    title?: string,
    icon?: string,
    children?: RouteType[]
}

const Router = () => (
    <BrowserRouter>
        <Suspense fallback={<div>loading...</div>}>
            <Switch>
                {
                    RouterList.map((item: RouteType) => (
                        <Route
                            key={item.path}
                            path={item.path}
                            component={item.component}
                            exact={item.exact}
                        />
                    ))
                }
            </Switch>
        </Suspense>
    </BrowserRouter>
)

export default Router;