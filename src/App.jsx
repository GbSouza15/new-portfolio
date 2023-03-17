import { Nav } from "./components/Nav.jsx";
import { Header } from "./components/Header.jsx";
import { BodyMain } from "./components/BodyMain.jsx"
import { Contact } from "./components/Contact&Footer.jsx";

function App() {

  return (
    <div className='bg-primaryColor font-roboto'>
        <Nav />
        <Header/>
        <BodyMain/>
        <Contact/>
    </div>
  )
}

export default App
