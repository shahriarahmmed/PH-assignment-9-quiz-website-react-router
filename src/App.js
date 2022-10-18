import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import QuizTopics from './components/QuizTopics/QuizTopics';
import Statistics from './components/Statistics/Statistics';
import Main from './layout/Main';


const router = createBrowserRouter([
  {
    path: '/', element: <Main></Main>, children: [
      { path: '/', element: <Home></Home> },
      { path: '/', element: <QuizTopics></QuizTopics> },
      { path: '/statistics', element: <Statistics></Statistics> },
      { path: '/blog', element: <Blog></Blog> }
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
