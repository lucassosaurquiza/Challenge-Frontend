import About from "./Components/About"
import Header from "./Components/Header"

const Home = () => {
  return (
    <>
      <div className="px-2 py-6 md:px-12 md:py-8">
        <Header />
        <About />
      </div>
    </>
  )
}

export default Home