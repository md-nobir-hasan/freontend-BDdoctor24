'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setImages(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="flex flex-wrap justify-center">
      {images.map((img) => (
        <div key={img.id} className="p-2 bg-white m-2"  style={{ width: '200px', height: '200px' }}>
          <Image
            src={img.url}
            alt='img.title'
            width={200}
            height={200}
            className="rounded-md"
            tyle={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
