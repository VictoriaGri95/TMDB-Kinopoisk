import './App.module.css'
import {Footer, Header, LinearProgress} from "@/common/components";
import {Routing} from "@/common/routing";
import s from './App.module.css';
import {useGlobalLoading} from "@/common/hooks";
import {ToastContainer} from "react-toastify";


function App() {

  const isGlobalLoading = useGlobalLoading()
  return (
    <div className={s.app}>
      <Header />
      {isGlobalLoading && <LinearProgress />}
      <div className={s.content}>
        <Routing />
      </div>
      <ToastContainer />
      <Footer />
    </div>
  )
}

export default App
