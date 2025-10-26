import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Components/home/home';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import WhatsAppButton from './Components/WhatsAppButton/WhatsAppButton';
import Services from './Components/Services/Services';
import HomeRequest from './Components/HomeRequest/HomeRequest';
import { LanguageProvider } from './context/LanguageContext';
import LanguageSwitcherButton from './Components/LanguageSwitcherButton/LanguageSwitcherButton';

let x = createBrowserRouter([
{index : true,element:<Home/> },
{path:"about",element:<About/> },
{path:"portfolio",element:<Portfolio/> },
{path:"services",element:<Services/> },
{path:"request",element:<HomeRequest/> },
]

)
function App() {


  return (
    <>
     <LanguageProvider>
     <LanguageSwitcherButton />
    <WhatsAppButton/>
   <RouterProvider router={x}></RouterProvider>
   </LanguageProvider>
    </>
    
  )
}

export default App
