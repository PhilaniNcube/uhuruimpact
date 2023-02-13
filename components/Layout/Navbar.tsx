import Link from "next/link";


const Navbar = () => {
  return (
    <header className="bg-transparent">
      {/*Desktop Navigation Starts*/}
      <div className="py-3 px-8 sm:px-6 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex justify-start space-x-6 lg:space-x-20 items-center">
          <Link href="/" className="text-dark-blue font-extrabold text-xl lg:text-3xl">
            Uhuru Impact
          </Link>
          <nav className="flex space-x-3 items-center">
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
