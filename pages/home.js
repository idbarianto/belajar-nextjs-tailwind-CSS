
import "tailwindcss/tailwind.css"

import Navigation from '../components/Navigation'


const Home = () => {
  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold underline">
          Hello world! (Home)
        </h1>
      </div>
    </>
  )
}


export default Home;