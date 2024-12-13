import React from 'react';

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const name = (await params).id;
  console.log(name);
  return <div>拦截路由-photo:{name}</div>;
};

export default Page;
