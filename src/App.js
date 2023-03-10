import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import QuizTopics from './components/QuizTopics/QuizTopics';
import Statistics from './components/Statistics/Statistics';
import Main from './layout/Main';


const router = createBrowserRouter([
  {
    path: '/', element: <Main></Main>, children: [
      { path: '/', element: <Home></Home> },
      { 
        path: '/',
        loader: () => {
          fetch(`https://openapi.programming-hero.com/api/quiz/${id}`)
        },
        element: <QuizTopics></QuizTopics> 
      },
      { path: '/statistics', element: <Statistics></Statistics> },
      { path: '/blog', element: <Blog></Blog> },
      {path: "/quiz", element: <Quiz></Quiz>}
    ]
  },
  
])


function App() {
  return (
    <div>
      {/* <Main></Main> */}
      <RouterProvider router={router}></RouterProvider>

    </div>

  );
}

export default App;
