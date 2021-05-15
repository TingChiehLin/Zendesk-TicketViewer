import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import styles from "../../styles/Layout.module.css";
import OverlayBackground from "../ui/OverlayBackground";

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;700&display=swap"
                      rel="stylesheet"/>
                <title>Zendesk Ticket Viewer</title>
                <meta name="description" content="Developed by Ting Chieh Lin"/>
                <link rel="icon" href="/favicon.svg"/>
            </Head>
            <Header/>
            <main className="bg-body w-full h-full px-16 py-16">
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;
