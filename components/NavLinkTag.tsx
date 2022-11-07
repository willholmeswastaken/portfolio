/* eslint-disable jsx-a11y/anchor-is-valid */
'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface NavLinkTagProps {
  isNextLink: boolean;
  href: string;
  text: string;
}

const NavLinkTag = ({ isNextLink, href, text }: NavLinkTagProps) => {
  const pathName = usePathname();
  const linkStyles = 'font-medium text-opacity-75 hover:bg-gray-500 hover:bg-opacity-20 px-4 py-1 rounded-md duration-200';

  return isNextLink ? (
    <Link href={href} className={`${linkStyles} ${pathName?.toLowerCase() === href.toLowerCase() ? 'text-white' : 'text-[#888888]'}`}>
      {text}
    </Link>
  ) : (
    <a className={`${linkStyles} text-[#888888]`} href={href}>
      {text}
    </a>
  );
};

export default NavLinkTag;
