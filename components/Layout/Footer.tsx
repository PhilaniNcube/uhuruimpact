/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const links = [
  {
    href: "/",
    title: "Home"
  },
  {
    href: "/about",
    title: "About Us"
  },
  {
    href: "/contact",
    title: "Contact Us"
  }
]

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="max-w-7xl mx-auto flex px-8 lg:px-6">
        <div className="bg-dark-blue px-1 flex items-center justify-center aspect-square overflow-hidden">
          <Link
            href="/"
            className="text-lg md:text-xl text-very-light-grey font-bold"
          >
            <img
              src="/images/uhuru.png"
              alt="logo"
              className="w-24  object-cover"
            />
          </Link>
        </div>
        <div className="flex-1 flex items-center bg-very-light-grey">
          <nav className="flex flex-col md:flex-row space-x-0 md:space-x-4 px-4 lg:px-8">
            {links.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="text-xl md:text-xl lg:text-3xl font-bold text-medium-grey"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
