const SectionBlog = () => {
    return (
        <>
            <section id="portofolio" className="pt-36 pb-32 bg-slate-100">
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto text-center mb-16">
                                <h4 className="font-semibold text-lg text-primary">Blog</h4>
                                <h2 className="font-bold text-dark text-3xl mb-4 lg:text-5xl">Tulisan Terkini</h2>
                                <p class="text-md text-secondary max-w-4xl mx-auto">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full max-w-full px-4 lg:w-1/2 xl:w-1/3">
                                <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
                                    <img src="https://source.unsplash.com/360x200?programing" alt="Programing" className="w-full" />
                                    <div className="py-8 px-6">
                                        <h3>
                                            <a href="#" className="block mb-3 font-semiblod text-xl text-dark hover:text-primary truncate">Tips belajar programming</a>
                                        </h3>
                                        <p className="font-medium text-base text-secondary mb-6">
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                        <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">Baca selengkapnya</a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full max-w-full px-4 lg:w-1/2 xl:w-1/3">
                                <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
                                    <img src="https://source.unsplash.com/360x200?nature" alt="Programing" className="w-full" />
                                    <div className="py-8 px-6">
                                        <h3>
                                            <a href="#" className="block mb-3 font-semiblod text-xl text-dark hover:text-primary truncate">Tips belajar programming</a>
                                        </h3>
                                        <p className="font-medium text-base text-secondary mb-6">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                        <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">Baca selengkapnya</a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full max-w-full px-4 lg:w-1/2 xl:w-1/3">
                                <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
                                    <img src="https://source.unsplash.com/360x200?news" alt="Programing" className="w-full" />
                                    <div className="py-8 px-6">
                                        <h3>
                                            <a href="#" className="block mb-3 font-semiblod text-xl text-dark hover:text-primary truncate">Tips belajar programming</a>
                                        </h3>
                                        <p className="font-medium text-base text-secondary mb-6">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                        <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">Baca selengkapnya</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )   
}

export default SectionBlog;