import React from 'react';

export default function imageViewInTable(props) {
    const { width = "32", height = "32", src = '' } = props;

    const handleImageClick = (img) => {
        window.open(img, '_blank');
    };

    return (
        <img alt="Avatar"
            className="rounded-full cursor-pointer"
            height="32"
            src={src}
            onClick={(e) => handleImageClick(src)}
            style={{
                aspectRatio: "32/32",
                objectFit: "cover",
            }}
            width={width} />
    )
}
