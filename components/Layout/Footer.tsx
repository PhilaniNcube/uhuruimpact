/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="max-w-7xl mx-auto flex px-8 lg:px-6">
        <div className="bg-dark-blue px-1 flex items-center justify-center aspect-square">
          <Link
            href="/"
            className="text-lg md:text-xl text-very-light-grey font-bold"
          >
            <img
              src="/images/uhuru.png"
              alt="logo"
              className="w-36 lg:w-44 object-cover"
            />
          </Link>
        </div>
        <div className="flex-1 flex items-center bg-very-light-grey">
          <nav className="flex flex-col md:flex-row space-x-0 md:space-x-4 px-4 lg:px-8">
            <Link
              href="/"
              className="text-md md:text-lg font-bold text-medium-grey"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-md md:text-lg font-bold text-medium-grey"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-md md:text-lg font-bold text-medium-grey"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
