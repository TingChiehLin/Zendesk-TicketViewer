import styles from "../../styles/Layout.module.css";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a
                href="https://www.zendesk.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src="/Zendesk-logo.svg" alt="Zendesk Logo" width={'75rem'} height={'75rem'}
                />
            </a>
        </footer>
    );
};

export default Footer;
