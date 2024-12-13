import React from 'react';

const Layout = ({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) => {
  return (
    <div>
      {children}
      {team}
      {analytics}
    </div>
  );
};

export default Layout;
