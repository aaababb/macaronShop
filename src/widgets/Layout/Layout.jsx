import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


const Layout = () => {
	return (
		<Box>
            <Header/>
				dfghjk
				<Outlet />
            <Footer/>
		</Box>
	)
}

export default Layout
