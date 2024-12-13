import React from 'react';

const Page = async ({ params }: { params: Promise<{ name: string }> }) => {
  const name = (await params).name;
  console.log(name);
  return <div>动态路由name:{name}</div>;
};

export default Page;
