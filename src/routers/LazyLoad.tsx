import React, { Suspense } from "react";

const lazyLoad = (Component: React.LazyExoticComponent<any>): React.ReactNode => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%"
          }}
        />
      }
    >
      <Component />
    </Suspense>
  );
};

export default lazyLoad;
