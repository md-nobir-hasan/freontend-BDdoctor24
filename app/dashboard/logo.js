'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Logo = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=1');
      const data = await response.json();
      setImages(data);
    };

    fetchImages();
  }, []);

  return (
    <div className="">
      {images.map((img) => (
        <div key={img.id} className=" p-2 bg-white">
          <Image
            src={img.url}
            alt={img.titl}
            width={100}
            height={50}
            className="w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
};

export default Logo;
