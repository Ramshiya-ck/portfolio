import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import { Home } from './components/Home.jsx';
import { About } from './components/about.jsx';
import { Skills } from './components/Skills.jsx';
import Projects from './components/projects.jsx';
import { Contact } from './components/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/skills", element: <Skills /> },
      { path: "/projects", element: <Projects /> },
      { 
        path: "/contact", 
        loader: () => {
          // Redirect to home page with hash for contact section
          return redirect("/#contact");
        },
        element: <Home /> 
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)