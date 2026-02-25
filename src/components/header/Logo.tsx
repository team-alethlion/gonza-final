import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <img
        src="/lovable-uploads/798d07d7-1db7-498c-92f3-6f6346827d59.png"
        alt="Gonzo Systems Logo"
        className="h-8 md:h-10"
      />
    </Link>
  );
};

export default Logo;
