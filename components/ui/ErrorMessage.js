const ErrorMessage = ({message}) => {
    return (
        <>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div role="alert">
                    <div className="bg-red-500 text-white font-bold rounded-t py-3 text-center z-30">
                        Error
                    </div>
                    <div className="border border-t-0 border-red-400 rounded-b
                                    bg-red-100 px-10 py-6 text-red-700">
                        <p>{message}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ErrorMessage