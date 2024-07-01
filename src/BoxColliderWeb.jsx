import { Suspense, lazy } from 'react';

import { Loading } from "./components/Loading"
import { AppRouter } from "./router/AppRouter";
// const AppRouter = lazy(() => delayFor(import('./router/AppRouter')));

async function delayFor(promise) {
  await new Promise(resolve => {
    setTimeout(resolve, 100);
  });
  return promise;
}

export const BoxColliderWeb = () => {
  
  return (
    // <Suspense fallback={<Loading/>}>
      <AppRouter/>
    // </Suspense>
  )
}

