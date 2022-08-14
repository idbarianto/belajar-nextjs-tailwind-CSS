
const SectionContact = () => {
    return (
        <>
            <section id="contact" class="pt-36 pb-32">
                <div className="container">
                    <div className="w-full px-4">
                        <div className="mx-auto text-center mb-16">
                            <h4 className="font-semibold text-lg text-primary">Contact</h4>
                            <h2 className="font-bold text-dark text-3xl mb-4 lg:text-5xl ">Hubungi kami</h2>
                            <p class="text-md text-secondary max-w-4xl mx-auto">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                    <form>
                        <div className="w-full lg:w-2/3 lg:mx-auto">
                            <div className="w-full px-3 mb-8">
                                <label for="name" className="text-base text-primary font-bold">Nama</label>
                                <input type="text" id="name" className="w-full bg-slate-100 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
                            </div>
                            <div className="w-full px-3 mb-8">
                                <label for="email" className="text-base text-primary font-bold">Email</label>
                                <input type="email" id="email" className="w-full bg-slate-100 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
                            </div>
                            <div className="w-full px-3 mb-8">
                                <label for="message" className="text-base text-primary font-bold">Pesan</label>
                                <textarea type="email" id="message" className="h-32 w-full bg-slate-100 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"></textarea>
                            </div>
                            <div className="w-full px-3 mb-8">
                                <button type="button" className="text-base font-semibold text-white py-3 px-8 bg-primary hover:opacity-80 hover:shadow-md transition duration-300 w-full rounded-full">Kirim</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default SectionContact;