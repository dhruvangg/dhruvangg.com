import Footer from "./Footer"
import Header from "./Header"

export default function Layout({ children }) {

    return (
        <main className="bg-white dark:bg-gray-900">
            <Header />
            <div className="body-container">
                {children}
            </div>
            <Footer />
        </main>
    )
}

