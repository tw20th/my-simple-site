// app/components/Card.tsx
import React from 'react';
import Image from 'next/image';
import './Card.css';

type CardProps = {
  title: string;
  description: string;
  imageUrl?: string;
};

export default function Card({ title, description, imageUrl }: CardProps) {
  return (
    <div className="card">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={title}
          className="card-image"
          width={300} // 幅を指定（お好みで変更可能）
          height={200} // 高さを指定（お好みで変更可能）
          objectFit="cover"
        />
      )}
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
}
