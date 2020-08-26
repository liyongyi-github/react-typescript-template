"use strict";
exports.__esModule = true;
var react_1 = require("react");
var RouterList = [
    {
        path: '/',
        component: react_1.lazy(function () { return Promise.resolve().then(function () { return require('../views/Home'); }); }),
        exact: true,
        title: '首页'
    },
    {
        path: '/info',
        component: react_1.lazy(function () { return Promise.resolve().then(function () { return require('../views/Info'); }); }),
        exact: true,
        title: '信息'
    }
];
exports["default"] = RouterList;
