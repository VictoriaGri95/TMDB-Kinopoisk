import {createRoot} from 'react-dom/client'
import './index.css'
import App from './app/ui/App/App.tsx'
import {BrowserRouter} from "react-router";
import {Provider} from "react-redux";
import {store} from "@/app/model/store.ts";
import {ThemeProvider} from "@/common/providers";


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
)
