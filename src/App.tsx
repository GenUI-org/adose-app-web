import { RouterProvider } from 'react-router-dom';

import { browseRoute } from './router';

export function LoadingSpinner() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="animate-spin rounded-full border-t-2 border-b-2 border-gray-900 h-16 w-16" />
    </div>
  );
}

function App() {
  return <RouterProvider
    router={browseRoute}
    fallbackElement={<LoadingSpinner />}
  />
}

export default App
