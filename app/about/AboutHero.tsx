import MediumHeading from "@/components/Typography/MediumHeading";
import Watermark from "@/components/Typography/Watermark";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="pt-10">
      <div className="max-w-7xl mx-auto px-8 md:px-6 overflow-hidden">
        <div className="flex flex-col lg:flex-row relative isolate">
          <div className="w-fit">
            <Image
              src="/images/about/desktop/image-hero.jpg"
              width={635}
              height={720}
              alt="About"
              className="w-full aspect-square object-cover"
            />
          </div>
          <div className="w-full relative isolate px-8 lg:pl-20 lg:-translate-x-[20%] flex-1 flex items-end ">
            <div className="w-full ">

              <div className="w-full flex flex-col bg-white py-10 px-8 lg:pl-20 items-start justify-center">

                <h2 className="text-dark-blue text-xl lg:text-4xl font-bold mb-4">
                  Enabling Impact Investing
                </h2>
                <p className="text-dark-blue font-medium text-base md:text-xl leading-7 mb-3">
                  With an eye on realising high financial return and positive
                  social outcomes, we enable venture funding for early-stage
                  businesses showing high growth potential.
                </p>
                <p className="text-dark-blue font-medium text-base md:text-xl leading-7 mt-4">
                  Our partners seek to invest in highly profitable businesses
                  that also yield social return, whether in alignment with
                  Environmental, Social and Governance (ESG) considerations, UN
                  sustainability goals, transformation and diversity and
                  inclusion objectives, or a combination of all three.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutHero;
