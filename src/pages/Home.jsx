import { useEffect, useState } from 'react';
import { lazy } from 'react';

const HomeModel = lazy(() => import('../components/home/HomeModel'));

export default function Home() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
  });

  return <>{load ? <HomeModel /> : null}</>;
}
