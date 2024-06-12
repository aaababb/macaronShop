// import { useRoutes } from 'react-router-dom'
// import Layout from '../../widgets/Layout/Layout'
// import NotFound from '../../widgets/NotFound/NotFound'
// import SaleRouter from '../../features/SALE/route'
// import MacaRouter from '../../features/macaronLove/route'

// const MyRoutes = () => {
// 	return useRoutes([
// 		{
// 			path: '',
// 			element: <Layout />,
//             errorElement:<NotFound/>,
// 			children: [SaleRouter,MacaRouter],
// 		},
// 	])
// }
// export default MyRoutes





import { createBrowserRouter } from "react-router-dom";
import Layout from "../../widgets/Layout/Layout";
import NotFound from "../../widgets/NotFound/NotFound";
import HomePage from "../../pages/HomePage/HomePage";


export const router = createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    errorElement:<NotFound/>,
    children:[
        {
            path: '/',
            element: <HomePage/>
        },

        
    ]
}])