import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
import Main from './Main';
import Friendds from './Components/Friends/Friendds';
import FrndDetails from './Components/FrndDetails/FrndDetails';

function App() {
  const router = createBrowserRouter([
    {path: '/',element:<Main></Main>,
    children:[
    {path: '/',element:<Home></Home>},
    {path: '/home',element:<Home></Home>},
    {path: '/about',element:<About></About>},
    {path: '/Header',element:<Header></Header>},
    {path: '/products',element:<Products></Products>},
    {
      path: '/friends',
      loader:async()=>{
        return fetch('https://jsonplaceholder.typicode.com/users')
      
    },
     element:<Friendds></Friendds>
  },
  {path: '/friend/:friendId',
  loader:async({params})=>{
    return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
  },
  element:<FrndDetails></FrndDetails>}
  
    ]},
    {path: '/*',element:<div><h1>This rout is not Found</h1></div>}
   

  ]);
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    
    </div>
  );
}

export default App;
