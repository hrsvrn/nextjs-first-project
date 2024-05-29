'use client';
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const NavLinks=[
  {
    href:"/",
    label:"Home",
  },
  {
    href:"/posts",
    label:"Posts"
  },


]
export default function Header() {
  const pathname=usePathname();
  console.log(pathname);
  return (
    <header className='flex justify-between items-center py-4 px-7 border-b'>
        <Link href="/">
        <Image
          src="/logoo.png"
          alt="Logo"
          className="w-[50px] h-[50px]"
          width="50"
          height="50"
        />
        </Link>
        <nav>
          <ul className='flex gap-2'>
          {NavLinks.map((link) => (
            <li key={link.href}>
              <a className={`text-zinc-400 ${pathname===link.href ? "text-zinc-900":""}`} href={link.href}>{link.label}</a>
            </li>
          ))}
          </ul>
        </nav>
    </header>
  )
}
