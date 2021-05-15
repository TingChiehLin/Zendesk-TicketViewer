import Link from 'next/link';

const PageNumber = ({number, paginate}) => {
    return (
        <>
            <div
               className="relative inline-flex items-center px-4 py-2 border border-gray-300
                          bg-white text-sm font-medium text-gray-700 hover:bg-hover cursor-pointer"
               onClick={() => paginate(number)}
            >
                {number}
            </div>
        </>
    )
}

export default PageNumber