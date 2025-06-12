
const Homepage = () => (
  <div>
    <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Truth Enforcers Bible Church Intl
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48"> AKA:
          <span className="text-base"> "Messengers Of Truth</span>
        </p>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Welcome To De Enforcers World. <br /> Here We ensure the word of the lord is adhered and lived with.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="/about"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gradient-to-br from-blue-600 via-purple-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm text-center me-2 mb-2"
          >
            About Us
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
          <a
            href="/blogs"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gradient-to-br from-blue-600 via-white-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-white dark:focus:ring-white font-medium rounded-lg text-sm text-center me-2 mb-2"
          >
            Blogs
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="bg-white py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Our Mission</h3>
          <p className="mb-3 text-gray-700 dark:text-gray-700">To glorify God by making disciples of Jesus Christ, building a community of faith,
            hope, and love, and serving our neighbors with compassion and grace.</p>
        </div>
        <div>
          <p className="text-2xl font-semibold text-gray-900">Our Vission</p>
          <p className="mb-3 text-gray-700 dark:text-gray-700">Seeing the truth is embraced and enforced in our deliberately and willing.</p>
        </div>
      </div>
      <p className="mb-3 text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
    </section>


    {/* About */}
    <section className="bg-white ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
          <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">Welcome</h1>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">Truth Enforcers Bible Church Intl is a truly spiritual and christain church.</p>

          {/* button links on about */}

          <div>
            <button type="button" className="text-white bg-gradient-to-br from-blue-600 via-purple-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              <a
                href="/about"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-transparent-700 hover:bg-transparent-800 focus:ring-4 focus:ring-transparent-900 dark:focus:ring-purple-500"
              >
                About Us
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>

            </button>

            <button type="button" className="text-white bg-gradient-to-r from-cyan-500 via-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">

              <a href="/founder"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-transparent-700 hover:bg-transparent-800 focus:ring-4 focus:ring-transparent-300 dark:focus:ring-blue-500"
              >
                Our Founder
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </button>

            <button type="button" className="text-white bg-gradient-to-br from-green-400 via-green-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">

              <a href="/organograms"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-transparent-700 hover:bg-transparent-800 focus:ring-4 focus:ring-transparent-300 dark:focus:ring-green-600"
              >
                Organograms
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </button>

            <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-pink-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              <a href="/events"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-transparent-700 hover:bg-transparent-800 focus:ring-4 focus:ring-transparent-300 dark:focus:ring-pink-500"
              >
                Our Events
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </button>

            <button type="button" className="text-white bg-gradient-to-br from-pink-500 via-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              <a href="/messages"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-transparent-700 hover:bg-transparent-800 focus:ring-4 focus:ring-transparent-300 dark:focus:ring--orange-400"
              >
                Messages
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </button>
          </div>

        </div>
      </div>
    </section>

  </div>
);

export default Homepage;
