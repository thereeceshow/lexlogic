import Link from 'next/link';

export function Header() {
  return (
    <header className="w-full bg-black shadow-md py-4 px-6 flex items-center justify-start space-x-6">
      <Link href="/">
        <button className="text-lg font-semibold text-yellow-300 hover:text-yellow-400 transition-colors">Home</button>
      </Link>
      <Link href="/support">
        <button className="text-lg font-semibold text-yellow-300 hover:text-yellow-400 transition-colors">Support</button>
      </Link>
    </header>
  );
}