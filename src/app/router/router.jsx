import { useRoutes } from 'react-router-dom'
import Layout from '../../widgets/Layout/Layout'
import NotFound from '../../widgets/NotFound/NotFound'
import SaleRouter from '../../features/SALE/api'

const MyRoutes = () => {
	return useRoutes([
		{
			path: '',
			element: <Layout />,
            errorElement:<NotFound/>,
			children: [BranchRoute,SaleRouter],
		},
	])
}
export default MyRoutes
