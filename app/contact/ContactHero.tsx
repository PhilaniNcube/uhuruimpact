import MediumHeading from "@/components/Typography/MediumHeading";
import Watermark from "@/components/Typography/Watermark";
import Image from "next/image";

const ContactHero = () => {
  return <section className="py-10">
    <div className="max-w-7xl mx-auto px-8 md:px-6 relative isolate">
      <Image src="/images/contact/desktop/image-hero.jpg" width={653} height={720} className="w-full lg:w-1/2 object-cover -z-0" alt="Contact" />
      <div className="absolute inset-0 flex justify-end items-end">
        <Watermark text="Contact" position="absolute top-16 left-32" size="text-8xl md:text-[200px]" />
        <div className="w-3/4 md:w-2/3 px-10 pt-32 lg:pt-44 pb-8 lg:pb-10 bg-white/60 lg:bg-white z-10">
           <MediumHeading text="Get In Touch" color="text-dark-blue" />
           <p className="text-md sm:text-lg md:text-xl font-bold">Reach out and we can start discussing how we can be of help.</p>
        </div>
      </div>
    </div>
  </section>;
};
export default ContactHero;
