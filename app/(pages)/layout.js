import Footer from "@/components/common/Footer"
import Nav from "@/components/common/Nav"

function LayoutPages({ children }) {
    return (
        <div>
            <Nav />
            {children}
            <Footer />
        </div>
    )
}

export default LayoutPages
