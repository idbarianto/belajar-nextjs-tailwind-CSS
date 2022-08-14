const SectionClient = () => {
    return (
        <>
            <section id="client" className=" pt-36 pb-32 bg-slate-700">
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto text-center mb-16">
                                <h4 className="font-semibold text-lg text-primary">Clients</h4>
                                <h2 className="font-bold text-white text-3xl mb-4 lg:text-5xl">Yang pernah bekerja sama</h2>
                                <p class="text-md text-secondary max-w-4xl mx-auto">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                        </div>

                        <div className="w-full px-4">
                            <div className="flex flex-wrap items-center justify-center">
                                <a href="#" className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                                    <img src="/images/google.png" alt="Google" />
                                </a>
                                <a href="#" className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                                    <img src="/images/twitter.png" alt="Twitter" />
                                </a>
                                <a href="#" className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                                    <img src="/images/linked-in.png" alt="Linked-In" />
                                </a>
                                <a href="#" className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                                    <img src="/images/instagram.png" alt="Instagram" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default SectionClient;