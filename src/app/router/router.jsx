import { useRoutes } from 'react-router-dom'
import Layout from '../../widgets/Layout/Layout'
import NotFound from '../../widgets/NotFound/NotFound'

const MyRoutes = () => {
	return useRoutes([
		{
			path: '',
			element: <Layout />,
            errorElement:<NotFound/>,
			children: [{}, BranchRoute],
		},
	])
}
export default MyRoutes
