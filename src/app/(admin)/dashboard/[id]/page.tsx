import React from 'react';

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  console.log(id);
  return <div>动态路由id:{id}</div>;
};

export default Page;
