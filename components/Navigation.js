

import Link from 'next/link'

const Navigation = () => {
    return (
        <>
            <div className="bg-gradient-to-br from-gray-400 to-gray-200">
                <div className="flex items-center px-2">
                    <div className="flex items-center justify-between px-4">
                        <div>
                            <a href="#" className="font-bold text-white text-xl">Barianto</a>
                        </div>
                        <div>
                            <button className="focus:outline-none text-white block lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between w-full">
                        <div className="flex gap-4">
                            <Link href="/">
                                <a className="my-2 px-3 py-1 rounded hover:text-white hover:bg-gray-600">Index</a>
                            </Link>
                            <Link href="/home">
                                <a className="my-2 px-3 py-1 rounded hover:text-white hover:bg-gray-600">Home</a>
                            </Link>
                            <Link href="/about">
                                <a className="my-2 px-3 py-1 rounded hover:text-white hover:bg-gray-600">About</a>
                            </Link>
                            <Link href="/card">
                                <a className="my-2 px-3 py-1 rounded hover:text-white hover:bg-gray-600">Card</a>
                            </Link>
                        </div>
                        <div className="flex gap-2">
                            <a href="#" className="my-2 px-3 py-1 rounded hover:text-white hover:bg-gray-600">Sign In</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Navigation;

