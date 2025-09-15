import Link from "next/link";

export function Footer() {
  return (
      <footer className="bg-black pt-20 text-white text-center p-6">
        <div className="flex justify-center gap-10 mb-4">
          <Link href="/tos" className="text-yellow-300 hover:text-yellow-400 transition-colors">Terms of Service</Link>
          <Link href="/privacy-policy" className="text-yellow-300 hover:text-yellow-400 transition-colors">Privacy Policy</Link>
        </div>
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <p>© 2024 LexLogic. All rights reserved.</p>
          <p>Contact us at reece@reecewalter.com</p> 
        </div>
      </footer>
  );
}