import MediumHeading from "@/components/Typography/MediumHeading";
import Watermark from "@/components/Typography/Watermark";
import Image from "next/image";

const Welcome = () => {
  return (
    <section className="pt-36 pb-10">
      <div className="px-8 sm:px-6 max-w-7xl mx-auto relative isolate">
        <Watermark text="Welcome" position="z-20 absolute -top-20 left-5" size="text-5xl md:text-[180px] -z-10" />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
          <div className="col-span-1 lg:col-span-2 flex flex-col justify-center items-start pl-10 lg:pl-36">
            <MediumHeading text="Who We Are" color="text-dark-blue" />
            <p className="text-medium-grey font-medium text-lg leading-7 mt-3 max-w-[45ch]">
              Established in 2016, Uhuru Impact is a multi-service provider focusing on advisory
              services and impact investing across the African continent.
            </p>
            <p className="text-medium-grey font-medium text-lg leading-7 mt-2 mb-6 max-w-[45ch]">
              We leverage our platform of business strategy and sector experts
              to help our clients achieve their growth and investment return
              goals (financial and social).
            </p>
            <MediumHeading text="Pan-African Values" color="text-dark-blue" />{" "}
            <p className="text-medium-grey font-medium text-lg leading-7 mt-3 max-w-[45ch]">
              We hold dear our core values of human dignity, trust, helpfulness,
              respect, sharing, community, selflessness, caring and connection.
            </p>
            <p className="text-medium-grey font-medium text-lg leading-7 mt-2 max-w-[45ch]">
              We work only with partners and clients that share our aim to help
              entrepreneurs, companies and investors realise their financial
              goals in a sustainable and socially responsible way.
            </p>
          </div>
          <div className="col-span-1 lg:py-20">
            <Image
              src="/images/africa.jpg"
              width={7026}
              height={7802}
              alt="Welcome"
              className="object-cover w-full grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Welcome;
