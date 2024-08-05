// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { AppDispatch } from "../../utils/redux/appStore";
// import { updateUser } from "../../utils/redux/slice/userSlice";
// import Admin from "../Admin/Admin";
// import Header from "../Header/Header";

// import { useSelector } from "react-redux";
// import User from "../User/User";
// import SignUp from "../SignUp/SignUp";

// const Home = () => {
//   const dispatch: AppDispatch = useDispatch();
//   const user = useSelector((state) => state.user);


//   useEffect(() => {
//     fetchAndSetUser()
//   }, [])

//   async function fetchAndSetUser(){
//     const response = await fetch('https://f2ed36a4mh.execute-api.ap-south-1.amazonaws.com/');
//     const json = await response.json();
//     dispatch(updateUser(json));
//   }

//   const AppLayout = () => {
//     return (
//       <Provider store={appStore}>
//         <div className="app">
//             <Header />
//             <Suspense fallback={<div>Loading...</div>}>
//               <Outlet/>
//             </Suspense>
//         </div>
//       </Provider>
//     );
//   };

//   const appRouter = createBrowserRouter([
//     {
//       path: "/",
//       element: <SignUp />,
//       children: [
//           {
//             path: "/",
//             element: <Home/>,
//           },
//           {
//             path: "/about",
//             element: <About />,
//           },
//           {
//             path: "/contact",
//             element: <Contact />,
//           },
//           {
//             path: "/restaurant/:restId",
//             element: <RestaurantMenu/>
//           }
//       ],
//       errorElement: <Error />,
//     },
//   ]);

//   return (
//     <div>
//       <Header fetchAndSetUser={fetchAndSetUser}/>
//       <div className="container">
//         {
//           user.role === 'admin' ?
//             <Admin/>
//             :<User/>
//         }
//       </div>
//     </div>
//   );
// }
 
// export default Home;