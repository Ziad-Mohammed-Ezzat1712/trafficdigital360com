import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Components/home/home';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import WhatsAppButton from './Components/WhatsAppButton/WhatsAppButton';
import Services from './Components/Services/Services';

let x = createBrowserRouter([
{index : true,element:<Home/> },
{path:"about",element:<About/> },
{path:"portfolio",element:<Portfolio/> },
{path:"services",element:<Services/> },
]

)
function App() {


  return (
    <>
    <WhatsAppButton/>
   <RouterProvider router={x}></RouterProvider>
    </>
  )
}

export default App
