import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Layout1 from "../components/Layout1"
import Layout2 from "../components/Layout2"
import Layout3 from "../components/Layout3"
import Layout4 from "../components/Layout4"
import Footer from "../components/Footer";
import CTA from "../components/CTA";

export default function HomePage() {
    return (
        <div>
            <Navbar />
            <main>
                <Header />
                <Layout1 />
                <Layout2 id="layout2" />
                <Layout3 id="layout3" />
                <Layout4 />
                <CTA id="cta" />
            </main>
            <Footer />
        </div>
    )
}