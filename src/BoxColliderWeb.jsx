import { Suspense, lazy } from 'react';

import { Loading } from "./components/Loading"
const AppRouter = lazy(() => delayFor(import('./router/AppRouter')));

async function delayFor(promise) {
  await new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
  return promise;
}

export const BoxColliderWeb = () => {
  
  return (
    <Suspense fallback={<Loading/>}>
      <AppRouter/>
    </Suspense>
  )
}

