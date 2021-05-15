import Link from 'next/link';
import Image from 'next/image'

const Header = () => {

    return (
        <header className="w-full h-16 bg-primary flex justify-between items-center px-8">
            <div>
                <Link
                    href='/'
                >
                    <span className="cursor-pointer">
                        <Image src="/Zendesk-wordmark.svg" alt="Zendesk Logo" width={'100%'} height={'50rem'}/>
                    </span>
                </Link>
            </div>
            <div className="text-2xl text-white hidden md:block">
                Zendesk Ticket Viewer
            </div>
            <nav className="text-white">
                <ul>
                    <li>
                        <a
                            href="https://github.com/TingChiehLin/Zendesk-TicketViewer"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
