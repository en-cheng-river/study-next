'use client';
import styles from './page.module.css';
import html2canvas from 'html2canvas';

export default function Home() {
  const handleClick2 = async () => {
    const element = document.body; // 要截图的元素
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
    console.log('-element-', element);
    console.log('-imgData-', imgData);
    if (window?.flutter_inappwebview) {
      window.flutter_inappwebview.callHandler('share', {
        title: '测试分享',
        description: '测试分享描述',
        data: imgData,
      });
    }
    const link = document.createElement('a');
    link.href = imgData;
    link.download = 'screenshot.png';
    link.click();
  };
  return (
    <div className={styles.page}>
      <span>首页</span>
      <div className={styles.shareItem}>
        <button onClick={handleClick2}>点击分享-对象</button>
      </div>
    </div>
  );
}
