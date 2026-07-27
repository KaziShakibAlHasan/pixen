import React from 'react';
import PhotoCard from './PhotoCard';

const TopGenerations = async () => {
    const res = await fetch('https://pixen-rojn.vercel.app/data.json');
    const photos = await res.json();
    const topPhots = photos.slice(0,8)
    
    
    return (
        <div>
            <h1 className='font-bold text-2xl mt-6'>Top Generations</h1>
            <div className='grid grid-cols-4 gap-4'>
                {
                    topPhots.map(photo => <PhotoCard key={photo.id} photo={photo}/>)
                }
            </div>
        </div>
    );
};

export default TopGenerations;