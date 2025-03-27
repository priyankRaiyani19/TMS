import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from 'react-router-dom';
import {Theme} from "@radix-ui/themes";
import {Toaster} from "react-hot-toast";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
                <Theme>
                    <App/>
                    <Toaster/>
                </Theme>
        </BrowserRouter>
    </StrictMode>
)
