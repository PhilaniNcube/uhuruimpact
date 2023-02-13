import MediumHeading from "@/components/Typography/MediumHeading";
import Image from "next/image";
import Link from "next/link";

const TeamHero = () => {
  return (
    <section className="pt-10">
      <div className=" max-w-7xl mx-auto relative isolate px-8 sm:px-6">
        <Image
          src="/images/home/desktop/image-small-team.jpg"
          width={1110}
          height={560}
          alt="Team"
          className="w-full object-cover"
        />
        <div className="absolute mx-8 sm:mx-6 inset-0">
          <div className="pl-16 lg:pl-44 pr-10 lg:pr-36 flex h-full bg-slate-800/30 flex-col justify-center items-start">
            <MediumHeading
              color="text-very-light-grey"
              text="Large expert network, quick execution"
            />
            <Link
              href="/about"
              className="bg-dark-blue hover:bg-medium-grey text-light-grey font-medium text-xl flex items-center space-x-3 w-fit px-10 py-4 mt-4"
            >
              About Us
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
export default TeamHero;
