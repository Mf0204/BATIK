//@ts-check
import Header from './header'
import Footer from './footer'
const LayoutUser = ({children}) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
export default LayoutUser;