import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { BiDownload } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';

const PhotoCard = ({ photo }) => {
    console.log(photo);
    return (
        <Card className='border'>
            <div className='relative w-full aspect-square'>
                <Image 
                    src={photo.imageUrl}
                    className='object-cover rounded-xl '
                    fill={true}
                    alt={photo.title}
                    
                   
                />
                <Chip size='som'  color="accent" className='absolute right-2 top-2'>{photo.category}</Chip>
            </div>
            <div>
                <h2 className='font-semibold my-2'>{photo.title}</h2>
                <div className='flex gap-6'>

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
            </div>
                <Button variant='outline' className={'w-full'}>View</Button>
        </Card>
    );
};

export default PhotoCard;