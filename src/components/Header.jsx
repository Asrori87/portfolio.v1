const Header = () => {
  return (
    <header className="flex items-center justify-between fixed top-0 left-0 w-full py-4 px-8 bg-gray-100 opacity-95">
      <a href="#" className="text-2xl font-semibold text-gray-600">
        Nanami
      </a>
      <nav className="flex space-x-4 items-center">
        <a href="#about" className="text-gray-400 hover:text-gray-600">
          About me
        </a>
        <a href="#services" className="text-gray-400 hover:text-gray-600">
          Services
        </a>
        <a href="#services" className="text-gray-400 hover:text-gray-600">
          Contact Me
        </a>
        <a
          href="#"
          className="py-2 px-4 text-gray-100 text-sm font-semibold bg-gray-500 rounded-sm"
        >
          Get CV
        </a>
      </nav>
    </header>
  );
};

export default Header;
