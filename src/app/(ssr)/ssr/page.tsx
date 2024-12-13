'use server';
import React from 'react';

const Page = ({ data }: { data: any[] }) => {
  console.log('ssr-data', data);
  return <div className={'px-4 text-base/8'}>ssr</div>;
};

export default Page;
