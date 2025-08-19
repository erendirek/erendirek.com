import Navbar from "@/components/Navbar/Navbar";
import Body from "@/components/Body/Body";
import IntersectionObserverComponent from "@/components/IntersectionObserverController";
import Footer from "@/components/Footer/Footer";

export default function Page() {
    return (
        <div>
            <Navbar />
            <Body />
            <IntersectionObserverComponent />
            <Footer />
        </div>
    );
}
