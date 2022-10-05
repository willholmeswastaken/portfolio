/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export interface NavLinkTagProps {
  isNextLink: boolean;
  href: string;
  text: string;
}

const NavLinkTag = ({ isNextLink, href, text }: NavLinkTagProps) => {
  const router = useRouter();
  const linkStyles = 'font-medium text-opacity-75 hover:bg-gray-500 hover:bg-opacity-20 px-4 py-1 rounded-md duration-200';

  return isNextLink ? (
    <Link href={href}>
      <a className={`${linkStyles} ${router.pathname.toLowerCase() === href.toLowerCase() ? 'text-white' : 'text-[#888888]'}`}>{text}</a>
    </Link>
  ) : (
    <a className={`${linkStyles} text-[#888888]`} href={href}>
      {text}
    </a>
  );
};

export default NavLinkTag;
