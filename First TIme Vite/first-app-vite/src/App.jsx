import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Card from "./Components/card"
import "./index.css"
function App() {

  return (
    <>
      <Navbar />
      <div className="cards">
      <Card title="card 1" description="card 1"/>
      <Card title="card 2" description="card 2"/>
      <Card title="card 3" description="card 3"/>
      <Card title="card 4" description="card 4"/>
      </div>
      <Footer />
    </>
  )
}

export default App
