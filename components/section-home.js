

const SectionHome = () => {
    return (
        <>
        
            <section id="home" className="pt-36">
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="w-full self-center px-4 lg:w-1/2">
                            <h1 className="text-base font-semibold text-primary">
                                Halo semua 👏, Saya 
                                <span className="font-bold block text-xl text-dark lg:text-5xl">Sugeng Arif Barianto</span>
                            </h1>
                            <h2 className="font-medium text-secondary text-lg mb-5">Fullstack Developer</h2>
                            <p className="text-medium mb-10 leading-relaxed">Belajar web programming itu mudah dan menyenangkan bukan, Bukan !!</p>

                            <a href="#" className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:opacity-80 transition duration-200">
                                Hubungi Saya
                            </a> 
                        </div>
                        <div className="w-full self-center px-4 lg:w-1/2">
                            <div className="mt-10 relative">
                                <img className="max-w-full mx-auto" src="/images/my-img.png" alt="Sugeng Arif Barianto" />
                                <span className="absolute top-20 -z-10 left-1/2 -translate-x-1/2">
                                    <svg width="500" height="500" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#facc15" d="M44.3,-46C53.7,-34.8,55.1,-17.4,55.2,0.1C55.3,17.5,53.9,35.1,44.5,44.7C35.1,54.2,17.5,55.9,-2.9,58.8C-23.3,61.7,-46.7,65.9,-56.1,56.3C-65.5,46.7,-61,23.3,-59.4,1.6C-57.8,-20.2,-59.2,-40.4,-49.8,-51.6C-40.4,-62.7,-20.2,-64.8,-1.4,-63.5C17.4,-62.1,34.8,-57.2,44.3,-46Z" transform="translate(100 100) scale(1.1)" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}


export default SectionHome;