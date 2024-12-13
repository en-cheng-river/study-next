import styles from './page.module.css';
import type { Metadata } from 'next';
import HomePage from '@/app/ui/homePage';

export const metadata: Metadata = {
  title: '2024年度无糖浏览器总结报告',
  description: '2024年度无糖浏览器总结报告',
};

export default function Home() {
  return (
    <div className={styles.page}>
      <HomePage />
    </div>
  );
}
