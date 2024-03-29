import { createBrowserRouter } from "react-router-dom";
import About from "../../Componentes/About/About";
import Blog from "../../Componentes/Blog/Blog";
import Contact from "../../Componentes/Contect/Contact";
import Course from "../../Componentes/Course/Course";
import Courses from "../../Componentes/Courses/Courses";

import Home from "../../Componentes/Home/Home";
import Login from "../../Componentes/LogIn/Login";
import Register from "../../Componentes/Register/Register";
import Main from "../../Layout/Main";


export const router = createBrowserRouter([
    {
        Path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("https://edufunit-server.vercel.app/courses")
            },
            {

                path:'/courses',
                element:<Courses></Courses>,
                loader: () => fetch("https://edufunit-server.vercel.app/courses")
            },

            {
                path:'/courses/:_id',
                element:<Course></Course>,
                loader:({params})=>fetch(`https://edufunit-server.vercel.app/courses/${params._id}`)
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
                loader:()=>fetch('https://edufunit-server.vercel.app/blog')
            }
        ]
    }
]);