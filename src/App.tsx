import { Provider } from 'react-redux'
import './App.css'
import {store} from './utils/redux/appStore.ts';
import Header from './components/Header/Header.tsx';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import './components/Home/home.scss';

const Management = lazy(()=>import('./components/Admin/Management/Management.tsx'));
const User = lazy(()=>import('./components/User/User.tsx'));
const Admin = lazy(() => import('./components/Admin/Admin.tsx'));
const Invoice = lazy(()=>import('./components/User/Invoice.tsx'));
const SignUp = lazy(()=>import('./components/SignUp/SignUp.tsx'));

function App() {
  const AppLayout = () => {
    return (
      <Provider store={store}>
        <div>
            <Header />
            <div className="container">
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet/>
            </Suspense>
            </div>
        </div>
      </Provider>
    );
  };


  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
          {
            path: "/",
            element: <SignUp/>,
          },
          {
            path: "/admin",
            element: <Admin />,
          },
          {
            path: "/admin/management",
            element: <Management />,
          },
          {
            path: "/user",
            element: <User />,
          },
          {
            path: "/user/invoice",
            element: <Invoice />,
          },
      ]
    },
  ]);


  return (
    <RouterProvider router={appRouter} />
  )
}

export default App
