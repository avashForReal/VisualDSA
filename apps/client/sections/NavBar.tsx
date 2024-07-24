import Image from 'next/image';

const NavBar = () => {
  return (
    <>
      <header className="flex items-center justify-between pb-4 border-b">
        <Image src={'/logo.svg'} alt="VisualDSA" width={180} height={180} />
        <nav className="flex gap-4">
          <a href="#" className="text-md">
            ? FAQ
          </a>
          <a href="#" className="text-md">
            GitHub
          </a>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
