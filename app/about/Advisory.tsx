import MediumHeading from "@/components/Typography/MediumHeading";
import Image from "next/image";

const Advisory = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-8 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="w-full flex flex-col items-start justify-center pr-10 lg:pr-36">
            <MediumHeading text="Advisory" color="text-dark-blue" />
            <p className="text-dark-blue font-medium text-base md:text-xl leading-7 mt-4">
              We help our partners realise their full growth potential by
              offering Capital raising, Business Restructuring, Transaction
              Advisory and Business Development Services.
            </p>
          </div>
          <Image src="/images/home/desktop/advisory.jpg" width={1500} height={880} alt="Advisory" className="w-full aspect-square object-cover" />
        </div>
      </div>
    </section>
  );
};
export default Advisory;
