import MediumHeading from "@/components/Typography/MediumHeading";
import SmallHeading from "@/components/Typography/SmallHeading";

const ContactDetails = () => {
  return (
    <section className="pb-10">
      <div className="max-w-7xl mx-auto px-8 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
          <MediumHeading text="Contact Details" color="text-dark-blue" />
          <a
            href="mailto:info@uhuruimpact.africa"
            className="text-medium-grey text-xl md:text-2xl font-medium"
          >
            info@uhuruimpact.africa
          </a>
          <a
            href="tel:+270670650664"
            className="text-medium-grey text-xl md:text-2xl font-medium"
          >
            +27 (0) 67 065 0664
          </a>
        </div>
      </div>
    </section>
  );
};
export default ContactDetails;
