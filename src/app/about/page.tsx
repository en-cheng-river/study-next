'use client';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  return (
    <nav>
      <div>我是 - about</div>
      <button
        onClick={() => {
          router.push('/concatUs');
        }}
      >
        测试
      </button>
    </nav>
  );
};
export default Page;
