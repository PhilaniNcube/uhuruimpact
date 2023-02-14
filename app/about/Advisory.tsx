import MediumHeading from "@/components/Typography/MediumHeading";
import Image from "next/image";

const Advisory = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-8 md:px-6 relative isolate">
        <h1 className="text-medium-grey font-bold text-4xl lg:text-8xl absolute -left-20 lg:left-20 tracking-widest rotate-90 lg:rotate-0 top-28 lg:top-10">
          About Us
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="w-full flex flex-col items-start justify-center pr-10 lg:pr-36">
            <h2 className="text-dark-blue text-xl lg:text-4xl font-bold mb-4">
              Advisory
            </h2>
            <p className="text-dark-blue font-medium text-base md:text-xl leading-7">
              We help our partners realise their full growth potential by
              offering Capital raising, Business Restructuring, Transaction
              Advisory and Business Development Services.
            </p>
          </div>
          <Image
            src="/images/home/desktop/advice.jpg"
            width={1920}
            height={1280}
            alt="Advisory"
            className="w-full aspect-square object-cover grayscale"
          />
        </div>
      </div>
    </section>
  );
};
export default Advisory;
