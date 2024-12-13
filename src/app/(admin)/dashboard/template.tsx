export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>dashboard - template</div>
      <span>{children}</span>
    </div>
  );
}
