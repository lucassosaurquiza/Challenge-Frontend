const About = () => {

  return (
    <>
      <section className="flex flex-col items-center justify-center">
        {/* ACA VA TODO EL CONTENIDO TEXTUAL */}
        <div className="md:flex w-full gap-6 mb-5">
          <div className=" w-full flex justify-center items-center">
            <div className="gap-4 ">
              <h3 className="font-normal text-sm leading-5 text-center md:text-left pb-2 md:pb-3">
                A B O U T — P E R S O N A L
              </h3>
              <h1 className="font-normal text-xl md:text-4xl leading-normal text-center md:text-left pb-4 md:pb-5">
                ¡Hello! <strong>I’m Angela Smith</strong>
              </h1>
              <p className="font-light text-base leading-6 text-center md:text-left pb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="hidden md:flex w-48 rounded-xl items-center bg-black cursor-pointer px-5 py-5 gap-2 justify-center">
                <button className="text-white">
                  Get started
                </button>
                <img className="w-673 h-740" src="./arrow-white.png" alt="" />
              </div>
            </div>
          </div>
          {/* ACA VA LA IMAGEN */}
          <div className="w-full flex justify-center px-10 md:p-0">
            <div className="w-full ">
              <img className="w-full" src="./girl.png" alt="" />
            </div>
          </div>
          <div className="flex md:hidden w-full mt-5 rounded-xl items-center bg-black cursor-pointer px-5 py-4 gap-2 justify-center">
            <button className="text-white">
              Get started
            </button>
            <img className="w-673 h-740" src="./arrow-white.png" alt="" />
          </div>
        </div>
        <div className="flex justify-center">
          <img src="./arrow-top.png" alt="" />
        </div>
      </section>
    </>
  )
}

export default About;