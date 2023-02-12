import MediumHeading from "@/components/Typography/MediumHeading";
import Watermark from "@/components/Typography/Watermark";
import Image from "next/image";

const Welcome = () => {
  return (
    <section className="pt-10">
      <div className="px-8 sm:px-6 max-w-7xl mx-auto relative isolate">
        <Watermark text="Welcome" position="z-20 absolute -top-20 left-5" size="text-5xl md:text-[180px]" />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
          <div className="col-span-1 lg:col-span-2 flex flex-col justify-end items-start pl-10 lg:pl-36">
            <MediumHeading text="Who We Are" color="text-dark-blue" />
            <p className="text-medium-grey font-medium text-lg md:text-xl leading-7 max-w-[45ch]">
              Uhuru Impact is a multi-service provider focusing on advisory
              services and impact investing across the African continent.
            </p>
            <p className="text-medium-grey font-medium text-lg md:text-xl leading-7 max-w-[45ch]">
              We leverage our platform of business strategy and sector experts
              to help our clients achieve their growth and investment return
              goals (financial and social).
            </p>
            <MediumHeading text="Pan-African Values" color="text-dark-blue" />{" "}
            <p className="text-medium-grey font-medium text-lg md:text-xl leading-7 max-w-[45ch]">
              We hold dear our core values of human dignity, trust, helpfulness,
              respect, sharing, community, selflessness, caring and connection.
            </p>
            <p className="text-medium-grey font-medium text-lg md:text-xl leading-7 max-w-[45ch]">
              We work only with partners and clients that share our aim to help
              entrepreneurs, companies and investors realise their financial
              goals in a sustainable and socially responsible way.
            </p>
          </div>
          <div className="col-span-1">
            <Image
              src="/images/home/desktop/image-welcome.jpg"
              width={350}
              height={568}
              alt="Welcome"
              className="object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Welcome;
