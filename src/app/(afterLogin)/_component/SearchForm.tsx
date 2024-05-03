'use client';
import { usePathname } from 'next/navigation';

import SearchIcon from './SearchIcon';

export default function SearchForm() {
  const path = usePathname();

  return (
    <>
      {path === '/explore' ? (
        <form className="w-full h-searchHeight flex rounded-radius10 bg-lightBrownTP items-center px-right">
          <SearchIcon />
          <input className="text-inputSize bg-transparent outline-none mx-input h-searchInputHeight leading-searchInput grow" />
        </form>
      ) : (
        <form className="w-searchWidth h-searchHeight flex rounded-radius10 bg-lightBrownTP items-center px-right">
          <SearchIcon />
          <input className="text-inputSize bg-transparent outline-none mx-input h-searchInputHeight leading-searchInput grow" />
        </form>
      )}
    </>
  );
}
