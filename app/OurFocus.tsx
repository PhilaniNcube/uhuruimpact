import MediumHeading from "@/components/Typography/MediumHeading";
import Image from "next/image";

const OurFocus = () => {

  const focusAreas = [
    {
      id: 1,
      title: "Sustainable Agriculture",
      description: "Cattle farming and Hydroponic Greenhouse Agriculture",
      image: "/images/home/desktop/agriculture.jpg",
      width: 1280,
      height: 1920,
    },
    {
      id: 2,
      title: "Education",
      description: "Early childhood development and mentorship",
      image: "/images/home/desktop/education.jpg",
      width: 1280,
      height: 1920,
    },
    {
      id: 3,
      title: "Healthcare",
      description:
        "Affordable healthcare services from low cost clinics",
      image: "/images/home/desktop/healthcare.jpg",
      width: 1280,
      height: 1920,
    },
  ];

  return (
    <section className="pt-10 lg:pt-20">
      <div className=" max-w-7xl mx-auto relative isolate px-8 sm:px-6">
        <MediumHeading text="Our Focus" color="text-dark-blue" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {focusAreas.map((item) => (
            <div key={item.id} className="w-full relative isolate group ">
              <Image
                src={item.image}
                width={item.width}
                height={item.height}
                alt={item.title}
                className="w-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-slate-800/40 group-hover:bg-slate-800/70 p-10 flex flex-col justify-end overflow-hidden">
                <p className="text-3xl text-very-light-grey font-bold">
                  {item.title}
                </p>
                <small className="text-lg leading-5 text-transparent -translate-x-4 group-hover:translate-x-0 transition-all duration-1000 group-hover:text-very-light-grey">
                  {item.description}
                </small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default OurFocus;
