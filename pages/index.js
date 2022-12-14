
import "tailwindcss/tailwind.css"

import Navigation from '../components/Navigation'

const Index = () => {
  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold underline">
          Hello world! (Index)
        </h1>
      </div>
    </>
  )
}

export default Index;