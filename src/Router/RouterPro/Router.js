import { createBrowserRouter } from "react-router-dom";
import About from "../../Componentes/About/About";
import Blog from "../../Componentes/Blog/Blog";
import Home from "../../Componentes/Home/Home";
import Login from "../../Componentes/LogIn/Login";
import Register from "../../Componentes/Register/Register";
import Main from "../../Layout/Main";


export const router = createBrowserRouter([
    {
        Path:'/',
        element:<Main></Main>,
        children:[
            {
              path:'/',
              element:<Home></Home>  
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    }
]);