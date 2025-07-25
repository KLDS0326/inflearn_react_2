import { createBrowserRouter} from 'react-router';

import { lazy, Suspense } from "react";
import BasicLayout from '../layouts/basicLayout';
import todoRouter from './todoRouter';
import productsRouter from './productRouters';

const Loading = () => <div>Loading....</div> //COMPONENT

const Main = lazy(() => import("../pages/mainPage"))
const About = lazy(() => import("../pages/aboutPage"))


const router = createBrowserRouter([
   {
    path: "/",
    Component : BasicLayout,
    children : [
     {
        index : true,
        element: <Suspense fallback={<Loading/>}> <Main/> </Suspense>
     },
     {
        path: "about",
        //suspense분할로딩임. 빼면 모두 호출. 
        element: <Suspense fallback={<Loading/>}> <About/> </Suspense>
     },
     todoRouter(),
     productsRouter()

   
    ]
   }
  ]);


export default router