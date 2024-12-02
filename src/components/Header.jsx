import { useState } from 'react';

const Header = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [textSearch, setTextSearch] = useState('');
    return (
        <div className="p-4 bg-black">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <h1 className="text-[30px] uppercase font-bold text-cyan-700">CinemaSphere</h1>

                    {/* Hamburger Menu Button */}
                    <button
                        className="lg:hidden text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-4">
                        <a href="#" className="text-white">Home</a>
                        <a href="#" className="text-white">About</a>
                        <a href="#" className="text-white">Contact</a>
                    </nav>
                </div>

                {/* Search Section */}
                <div className="hidden lg:flex items-center space-x-4">
                    <input type="text" className="p-3 text-black" placeholder="Search" onChange={(e) => setTextSearch(e.target.value)} value={textSearch} />
                    <button onClick={() => props.handleSearch(textSearch)} className="rounded-2xl p-3 text-white bg-red-600">Search</button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
                <nav className="flex flex-col space-y-4">
                    <a href="#" className="text-white">Home</a>
                    <a href="#" className="text-white">About</a>
                    <a href="#" className="text-white">Contact</a>
                    <div className="flex flex-col space-y-4 pt-4">
                        <input type="text" className="p-3 text-black" placeholder="Search" onChange={(e) => setTextSearch(e.target.value)} value={textSearch} />
                        <button onClick={() => props.handleSearch(textSearch)} className="rounded-2xl p-3 text-white bg-red-600">Search</button>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;