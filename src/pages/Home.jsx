import { Suspense, useEffect, useState } from 'react';
import { lazy } from 'react';

const HomeModel = lazy(() => import('../components/home/HomeModel'));

export default function Home() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
  });

  return (
    <>
      {load ? (
        <Suspense fallback={false}>
          <HomeModel />
        </Suspense>
      ) : (
        <h1>모델을 로드하는 중입니다</h1>
      )}
    </>
  );
}
