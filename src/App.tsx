import { Provider } from 'react-redux'
import './App.css'
import store from './utils/redux/appStore.ts';
import Home from './components/Home/Home.tsx';
import Header from './components/Header/Header.tsx';
import { Suspense } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import SignUp from './components/SignUp/SignUp.tsx';
import Admin from './components/Admin/Admin.tsx';
import User from './components/User/User.tsx';
import './components/Home/home.scss';
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
            path: "/user",
            element: <User />,
          },
      ]
    },
  ]);


  return (
    <RouterProvider router={appRouter} />
  )
}

export default App
