import Footer from "@/components/common/Footer"
import Nav from "@/components/common/Nav"
import BackToTop from "@/components/ui/backtotop"
export const metadata = {
  title: "Virtuosoft | Home",
  description: "Created By Virtuosoft Limited",
};

function LayoutPages({ children }) {
    return (
        <div>
            <Nav />
            {children}
            <BackToTop/>
            <Footer />
        </div>
    )
}

export default LayoutPages
