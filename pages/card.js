
import "tailwindcss/tailwind.css"

import Navigation from '../components/Navigation'


const Card = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-100">
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-5/12">
            <div className="bg-white shadow rounded-xl overflow-hidden rotate-0 hover:rotate-3 transition-tranform duration-300">
              <div className="px-8 py-5 leading-relaxed text-xl text-gray-800">
                Lorem
              </div>
              <div className="px-8 py-5 bg-gray-500 flex items-center justify-between bg-gradient-to-r from-red-500 via-green-500 to-blue-500">
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-3">
                    <img className="w-10 h-10 rounded-full border-2 border-white" src="https://academy.dqlab.id/images/no_prof.jpg" />
                  </div>
                  <div className="text-white ">Sugeng Arif Barianto</div>
                </div>
                <div className="">
                  <img className="w-10 h-10 rounded-full border-2 border-white" src="https://academy.dqlab.id/images/no_prof.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Card;