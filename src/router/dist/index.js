"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var routes_1 = require("./routes");
var Router = function () { return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
    react_1["default"].createElement(react_1.Suspense, { fallback: react_1["default"].createElement("div", null, "loading...") },
        react_1["default"].createElement(react_router_dom_1.Switch, null, routes_1["default"].map(function (item) { return (react_1["default"].createElement(react_router_dom_1.Route, { key: item.path, path: item.path, component: item.component, exact: item.exact })); }))))); };
exports["default"] = Router;
