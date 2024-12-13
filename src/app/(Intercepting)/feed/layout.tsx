import React from 'react';

const Layout = ({
  children,
  test,
}: {
  children: React.ReactNode;
  test: React.ReactNode;
}) => {
  return (
    <div>
      {children}
      {test}
    </div>
  );
};

export default Layout;
