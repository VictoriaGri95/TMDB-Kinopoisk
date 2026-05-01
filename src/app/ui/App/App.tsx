import './App.module.css'
import {Footer, Header} from "@/common/components";
import {Routing} from "@/common/routing";
import s from './App.module.css';


function App() {


  return (
    <div className={s.app}>
      <Header />
      <div className={s.content}>
        <Routing />
      </div>
      <Footer />
    </div>
  )
}

export default App
