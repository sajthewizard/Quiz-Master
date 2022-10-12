
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import Quizdetails from './Components/Quizdetails/Quizdetails';
import Statics from './Components/Statics/Statics';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/about', element: <About></About>
        }, {
          path: '/blog', element: <Blog></Blog>
        }, {
          path: '/statics', element: <Statics></Statics>
        },
        {
          path: '/',
          loader: () => { return fetch('https://openapi.programming-hero.com/api/quiz') },
          element: <Home></Home>
        },
        {
          path: '/quiz/:quizid',
          loader: ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizid}`)
          }

          , element: <Quizdetails> </Quizdetails>

        }
      ]
    }, { path: '*', element: <div><h1>404! Check and try again</h1></div> }
  ])
  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
