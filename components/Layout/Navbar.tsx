/* eslint-disable @next/next/no-img-element */
import Link from "next/link";


const Navbar = () => {
  return (
    <header className="bg-white/60 backdrop-blur-lg shadow-md sticky top-0 left-0 right-0 z-50">
      {/*Desktop Navigation Starts*/}
      <div className="py-3 px-8 sm:px-6 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex justify-start space-x-6 lg:space-x-20 items-center">
          <Link href="/" className="bg-transparent">
            <img src="/images/black_logo.png" alt="logo" className="w-20 md:w-24 lg:w-44 object-cover pt-2"/>
          </Link>
          <nav className="flex space-x-3 items-center translate-y-1">
            <Link href="/about" className="text-medium-grey font-extrabold text-lg">
               About Us
            </Link>
            <Link href="/contact" className="text-medium-grey font-extrabold text-lg">
              Contact
            </Link>
          </nav>
        </div>
      </div>
      {/*Desktop Navigation Ends*/}
    </header>
  );
};
export default Navbar;
