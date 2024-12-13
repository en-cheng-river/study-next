'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const _photos = [
  { id: '1', src: 'http://placebear.com/200/200' },
  { id: '2', src: 'http://placebear.com/200/200' },
];

const Page = () => {
  const router = useRouter();
  return (
    <div>
      <div>我是 - feed</div>
      {_photos.map(({ id, src }) => (
        <div key={id}>
          <Link href={`/feed/photo/${id}`}>
            <Image width="100" height={100} src={src} alt={''} />
          </Link>
        </div>
      ))}
      <div>
        <button
          onClick={() => {
            console.log(2);
            router.push(`/feed/photo/1`);
          }}
        >
          拦截路由
        </button>
      </div>
    </div>
  );
};

export default Page;
