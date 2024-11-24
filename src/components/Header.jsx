const Header = () => {
    return (
        <>
            <div className=" p-4 bg-black flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <h1 className="text-[30px] uppercase font-bold text-cyan-700">CinemaSphere</h1>
                    <nav className="flex items-center space-x-4">\
                        <a href="#" className="text-white">Home</a>
                        <a href="#" className="text-white">About</a>
                        <a href="#" className="text-white">Contact</a>
                    </nav>
                </div>
                <div className="flex items-center space-x-4">
                    <input type="text" className="p-3 text-black" placeholder="search" />
                    <button className="rounded-2xl p-3 text-white bg-red-600 ">Search</button>
                </div>
            </div>
        </>
    );
};
export default Header;