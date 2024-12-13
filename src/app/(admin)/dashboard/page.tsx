'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  return (
    <div>
      <div>我是 - dashboard</div>
      <div>
        <button
          onClick={() => {
            router.push('/dashboard/32323');
          }}
        >
          测试1
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            router.push(`/${encodeURIComponent('江承恩')}`);
          }}
        >
          测试2
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            router.push(`/30`);
          }}
        >
          测试3
        </button>
      </div>
    </div>
  );
};

export default Page;
