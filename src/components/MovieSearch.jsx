import React from 'react';
import Modal from 'react-modal';
import YouTube from 'react-youtube';
import { useState } from 'react';

const opts = {
    height: '390',
    width: '640',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
    },
};
const MovieSearch = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [trailerKey, setTrailerKey] = useState('');

    const handleTrailer = async (id) => {
        setTrailerKey('');
        try {
            const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
                }
            };
            const movieKey = await fetch(url, options);
            const data = await movieKey.json();
            console.log(data);
            setTrailerKey(data.results[0].key);
            setModalIsOpen(true);
        } catch (error) {
            setModalIsOpen(false);
            console.log(error);
        }
    };
    return (
        <>
            <div className='text-white p-10 mb-10'>
                <h2 className="uppercase text-3xl font-bold mb-4">{props.title}</h2>
                <div className='grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'>
                    {props.data && props.data.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => handleTrailer(item.id)}
                            className="w-[200px] h-[300px] relative group">
                            <div className='group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer'>
                                <div className='absolute top-0 left-0 w-full h-full bg-black/40' />
                                <img
                                    src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                                    alt={item.title}
                                    className='w-full h-full object-cover '

                                />
                                <div className='absolute bottom-4 left-8'>
                                    <p className='uppercase text-md'>{item.title || item.original_title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={() => setModalIsOpen(false)}
                        style={{
                            overlay: {
                                position: "fixed",
                                zIndex: 9999,
                            },
                            content: {
                                top: "50%",
                                left: "50%",
                                right: "auto",
                                bottom: "auto",
                                marginRight: "-50%",
                                transform: "translate(-50%, -50%)",
                            },
                        }}
                        contentLabel="Example Modal"
                    >
                        <YouTube videoId={trailerKey} opts={opts} />
                    </Modal>
                </div>
            </div>
        </>
    );
};
export default MovieSearch;