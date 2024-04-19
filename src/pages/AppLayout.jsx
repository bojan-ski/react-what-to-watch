import { Outlet, useNavigation } from "react-router-dom"
import { AppProvider } from "../context"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const AppLayout = () => {
    const navigation = useNavigation()
    console.log(navigation.state);
    const isPageLoading = navigation.state === 'loading'

    return (
        <AppProvider>
            <>
                <Navbar />

                <main>
                    {isPageLoading ? <div className="loading" /> : <Outlet />}
                </main>

                <Footer />
            </>
        </AppProvider>
    )
}

export default AppLayout