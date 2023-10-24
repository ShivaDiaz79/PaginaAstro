import React from "react";

const Gallery = () => {
  // Define una matriz de URLs de imágenes
  const imageUrls = [
    "https://res.cloudinary.com/di1v23yy0/image/upload/v1698121147/2_01_ovtrgr.png",
    "https://res.cloudinary.com/di1v23yy0/image/upload/v1698121147/2_02_yizxqy.png",
    "https://res.cloudinary.com/di1v23yy0/image/upload/v1698121148/2_03_tifis3.png",
    "https://res.cloudinary.com/di1v23yy0/image/upload/v1698121147/2_04_bxdnfm.png",
    "https://res.cloudinary.com/di1v23yy0/image/upload/v1698121148/2_05_tgcihe.png",
    "https://res.cloudinary.com/di1v23yy0/image/upload/v1698121147/2_06_shl58u.png",
    "https://res.cloudinary.com/di1v23yy0/image/upload/v1698121148/2_07_nmtrju.png",
    "https://res.cloudinary.com/di1v23yy0/image/upload/v1698121148/2_08_u9txoz.png",
    "https://res.cloudinary.com/di1v23yy0/image/upload/v1698121147/2_09_p6arhe.png",
  ];

  return (
    <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
      {imageUrls.map((imageUrl, index) => (
        <div key={index}>
          <img
            className="h-auto max-w-full rounded-lg"
            src={imageUrl}
            alt={`Image ${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
