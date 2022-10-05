import React from 'react';
import { NavLink } from '../types/NavLink';
import NavLinkTag from './NavLinkTag';

const Nav = () => {
  const navItems: Array<NavLink> = [
    {
      isNextLink: true,
      href: '/',
      text: 'Home',
    },
    {
      isNextLink: false,
      href: 'https://dev.to/willholmes',
      text: 'Blog',
    },
    {
      isNextLink: false,
      href: 'https://github.com/willholmeswastaken',
      text: 'Github',
    },
  ];
  return (
    <nav className='flex items-center justify-between w-full relative max-w-2xl border-gray-700 mx-auto pt-3 pb-8 sm:pb-10 bg-opacity-60 text-gray-100'>
      <div className='flex gap-x-1 flex-row ml-[-1rem] py-8'>
        {navItems.map(x => (
          <NavLinkTag key={x.text} isNextLink={x.isNextLink} href={x.href} text={x.text} />
        ))}
      </div>
    </nav>

  );
};

export default Nav;
