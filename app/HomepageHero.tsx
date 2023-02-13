import LargeHeading from "@/components/Typography/LargeHeading";
import Image from "next/image";
import Link from "next/link";

const HomepageHero = () => {
  return (
    <section>
      <div className="absolute top-0 left-1 lg:left-6 items-center hidden lg:flex space-x-4 rotate-90 z-[30]">
        <span className="h-[1px] bg-light-grey w-[200px]" />
        <p className="text-light-grey text-md uppercase tracking-[8px]">Home</p>
      </div>
      <div className="px-8 sm:px-6 max-w-7xl mx-auto relative isolate">
        <Image
          src="/images/home/desktop/image-hero-federal.jpg"
          width={1110}
          height={720}
          alt="Background"
          className="w-full object-cover aspect-[2/3] lg:aspect-video"
        />
        <div className="absolute inset-0 ">
          <div className="flex flex-col h-full px-16 md:px-36 justify-center ">
            <LargeHeading
              text="Advisory | Impact Investing"
              color="mix-blend-color-dodge lg:mix-blend-screen text-very-light-grey "
              width="w-[20ch]"
            />
            <p className="text-very-light-grey font-medium text-base sm:text-lg lg:text-xl leading-7 max-w-[45ch]">
              Uhuru Impact is a multi-service provider focusing on advisory
              services and impact investing across the African continent.
            </p>

            <Link
              href="/contact"
              className="bg-dark-blue hover:bg-medium-grey text-light-grey font-medium text-xl flex items-center space-x-3 w-fit px-10 py-4 mt-4"
            >
              Contact Us
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomepageHero;
