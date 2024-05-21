'use client';

import { useRouter } from 'next/navigation';
import React from 'react'

interface MenuItemProps {
    onClick?: () => void;
    href?: string;
    label: string;
}

const scrollToSection = (id: string) => {
  const sectionId = id.startsWith('#') ? id.substring(1) : id;
  const section = document.getElementById(sectionId);
  const navbarHeight = 180; // Height of your navbar, adjust accordingly

  if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
          top: sectionTop,
          behavior: 'smooth'
      });
  }
}

const MenuItem: React.FC<MenuItemProps> = ({
    onClick,
    label,
    href
}) => {
  const router = useRouter();

    const navigateToHome = () => {
        return new Promise<void>((resolve) => {
            router.push('/');
            resolve();
        });
    };

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      event.preventDefault();

      if (href) {
          if (window.location.pathname !== '/') {
              navigateToHome().then(() => {
                  setTimeout(() => scrollToSection(href), 100);
              });
          } else {
              scrollToSection(href);
          }
      }
  };

  const itemClass = "text-center p-3 md:block cursor-pointer hover:bg-gray-300 transition rounded-xl whitespace-normal break-words";

  if (href) {
    return (
        <a href={href} onClick={handleClick} className={itemClass}>
          <div onClick={onClick} className="px-4 py-3 transition font-semibold">
            {label}
          </div>
        </a>
    );
  } 

  if (onClick) {
    return (
      <button onClick={onClick} className={itemClass}>
        <div className="px-4 py-3 transition font-semibold">
          {label}
        </div>
      </button>
    );
  }

  return null;
}

export default MenuItem;
