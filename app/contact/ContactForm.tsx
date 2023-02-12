import MediumHeading from "@/components/Typography/MediumHeading";

const ContactForm = () => {
  return (
    <section className="pt-10 pb-10">
      <div className="max-w-7xl mx-auto px-8 md:px-6 flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/3">
          <MediumHeading text="Lets' Connect" color="text-dark-blue" />
        </div>
        <form className="flex-1 pr-10 lg:pr-28">
          <div className="w-full lg:w-2/3 flex flex-col mb-4">
            <label className="text-light-grey font-bold text-lg" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 text-md font-medium text-medium-grey outline-none border-none focus:outline-none focus:border-none focus:ring-0 border-b-2 border-medium-grey shadow-md bg-slate-200"
            />
          </div>
          <div className="w-full lg:w-2/3 flex flex-col mb-4">
            <label
              className="text-light-grey font-bold text-lg"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 text-md font-medium text-medium-grey outline-none border-none focus:outline-none focus:border-none focus:ring-0 border-b-2 border-medium-grey shadow-md bg-slate-200"
            />
          </div>
          <div className="w-full lg:w-2/3 flex flex-col mb-4">
            <label
              className="text-light-grey font-bold text-lg"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full p-2 text-md font-medium text-medium-grey outline-none border-none focus:outline-none focus:border-none focus:ring-0 border-b-2 border-medium-grey shadow-md bg-slate-200"
            />
          </div>

          <div className="w-full lg:w-2/3 flex flex-col mb-4">
            <label
              className="text-light-grey font-bold text-lg"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              rows={4}
              id="message"
              name="message"
              className="w-full p-2 text-md font-medium text-medium-grey outline-none border-none focus:outline-none focus:border-none focus:ring-0 border-b-2 border-medium-grey shadow-md bg-slate-200"
            />
          </div>

          <button
            type="submit"
            className="bg-dark-blue hover:bg-medium-grey text-light-grey font-medium text-xl flex items-center space-x-3 w-fit px-10 py-4 mt-4"
          >
            {" "}
           Submit
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 ml-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
};
export default ContactForm;
