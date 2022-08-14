
const SectionPortofolio = () => {

    return (
        <>
            <section id="portofolio" className="pt-36 pb-32 bg-slate-100">
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto text-center mb-16">
                                <h4 className="font-semibold text-lg text-primary">Portofolio</h4>
                                <h2 className="font-bold text-dark text-3xl mb-4 lg:text-5xl ">Project Terbaru</h2>
                                <p class="text-md text-secondary">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full px-4 flex flex-wrap items-center justify-center xl:w-10/12 xl:mx-auto">
                        <div className="mb-12 p-4 md:w-1/2">
                            <div className="rounded-md shadow-md overflow-hidden">
                                <img src="/images/p1.png" alt="Landing page" />
                            </div>
                            <h3 className="font-semibold text-xl test-dark mt-5">
                                Landing page Sugeng Arif Barianto
                            </h3>
                            <p className="text-base text-secondary">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <div className="mb-12 p-4 md:w-1/2">
                            <div className="rounded-md shadow-md overflow-hidden">
                                <img src="/images/p2.png" alt="Landing page" />
                            </div>
                            <h3 className="font-semibold text-xl test-dark mt-5">
                                Landing page Sugeng Arif Barianto
                            </h3>
                            <p className="text-base text-secondary">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default SectionPortofolio;