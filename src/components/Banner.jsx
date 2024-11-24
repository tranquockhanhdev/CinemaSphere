import IconRating from '../assets/rating.png';
import IconRatingHalf from '../assets/ratinghalf.png';
import ImgTemp from '../assets/temp-1.png';
import Iconplay from '../assets/playbutton.png';

const Banner = () => {
    return (
        <div className="bg-banner bg-center bg-no-repeat bg-cover w-full h-[600px] relative">
            <div className="absolute w-full h-full top-0 left-0 bg-black opacity-40" />
            <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20">
                <div className="flex flex-col space-y-5 items-baseline w-[50%]">
                    <p className="text-white bg-gradient-to-r from-red-600 to-red-300 text-md py-1 px-3">TV Show</p>
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-white text-3xl font-bold">The Falcon and the Winter Soldier</h2>
                        <div className="flex items-center space-x-3">
                            <img src={IconRating} alt="rating" className="w-8 h-8" />
                            <img src={IconRating} alt="rating" className="w-8 h-8" />
                            <img src={IconRating} alt="rating" className="w-8 h-8" />
                            <img src={IconRating} alt="rating" className="w-8 h-8" />
                            <img src={IconRatingHalf} alt="rating" className="w-8 h-8" />
                        </div>
                        <p className="text-white text-lg">Following the events of “Avengers: Endgame”, the Falcon, Sam Wilson and the Winter Soldier, Bucky Barnes team up in a global adventure that tests their abilities, and their patience.
                        </p>
                        <div className='flex items-center space-x-4'>
                            <button className='p-3 text-white bg-black font-bold text-sm'>Chi Tiết</button>
                            <button className='p-3 text-white bg-red-600 font-bold text-sm'>Xem Phim</button>
                        </div>
                    </div>
                </div>
                <div className="w-[50%] flex items-center justify-center">
                    <div className='w-[350px] h-[500px] relative group cursor-pointer'>
                        <img src={ImgTemp} alt=""
                            className='w-full h-full object-cover' />
                        <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-100 ease-in-out'>
                            <img src={Iconplay} alt="" className='w-16 h-16 relative z-20' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default Banner;