import Link from 'next/link';

const Button = ({children, link}) => {
    return (
        <Link href={link}>
            <a className="bg-secondary hover:bg-third
                        text-white py-2 px-4 rounded focus:outline-none">
                <span className="text-sm">{children}</span>
            </a>
        </Link>
    )
}

export default Button