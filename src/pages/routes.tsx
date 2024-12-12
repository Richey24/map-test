import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Fallback from '../utils/Fallback';
const Quote = React.lazy(() => import("./Quote/Quote"))
const Request = React.lazy(() => import("./Request/Request"))
const Terms = React.lazy(() => import("./Terms/Terms"))
const Review = React.lazy(() => import("./Review/Review"))

const router = createBrowserRouter([
    {
        path: "/",
        element: <React.Suspense fallback={<Fallback />}><Quote /></React.Suspense>
    },
    {
        path: "/quote",
        children: [
            {
                path: "request",
                element: <React.Suspense fallback={<Fallback />}><Request /></React.Suspense>
            },
            {
                path: "terms",
                element: <React.Suspense fallback={<Fallback />}><Terms /></React.Suspense>
            },
            {
                path: "review",
                element: <React.Suspense fallback={<Fallback />}><Review /></React.Suspense>
            },
        ]
    },
])

export default router