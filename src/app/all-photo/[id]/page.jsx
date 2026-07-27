import { Card, Separator } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { BiDownload } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';

const PhotoDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`https://pixen-rojn.vercel.app/data.json`)
    const photos = await res.json()
    const photo = photos.find(p => p.id == id)
    console.log(photo);
    return (
        <div>
            <Card className='w-10/12 mx-auto'>
                <div className='mx-auto'>
                    <Image
                        src={photo.imageUrl}
                        className='object-cover rounded-xl '
                        alt={photo.title}
                        height={200}
                        width={400}
                    />                   
                </div>
                <div className='flex gap-6 mx-auto mt-4'>
                
                                    <div className='flex items-center gap-2 '>
                                        <FaHeart />
                                        <p>{photo.likes}</p>
                                    </div>
                                    <Separator orientation='vertical' />
                                    <div className='flex items-center gap-2'>
                                        <BiDownload />
                                        <p>{photo.downloads}</p>
                                    </div>
                                </div>
                <div className='text-center'>
                    <h2 className='text-4xl font-semibold mb-2'>{photo.title}</h2>
                    <p>{photo.prompt}</p>
                </div>
            </Card>
        </div>
    );
};

export default PhotoDetailsPage;