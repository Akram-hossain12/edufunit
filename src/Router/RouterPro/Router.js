import { createBrowserRouter } from "react-router-dom";
import About from "../../Componentes/About/About";
import Blog from "../../Componentes/Blog/Blog";
import Contact from "../../Componentes/Contect/Contact";
import Course from "../../Componentes/Course/Course";
import Courses from "../../Componentes/Courses/Courses";
import DeatilsCourses from "../../Componentes/DeatilsCourses/DeatilsCourses";
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
                loader: () => fetch("http://localhost:5000/courses")
            },
            {

                path:'/courses',
                element:<Courses></Courses>,
                loader: () => fetch("http://localhost:5000/courses")
            },

            {
                path:'/courses/:_id',
                element:<Course></Course>,
                loader:({params})=>fetch(`http://localhost:5000/courses/${params._id}`)
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
                loader:()=>fetch('http://localhost:5000/blog')
            }
        ]
    }
]);