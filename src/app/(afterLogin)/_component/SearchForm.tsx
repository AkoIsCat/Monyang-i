import SearchIcon from './SearchIcon';

export default function SearchForm() {
  return (
    <>
      <form className="w-searchWidth h-searchHeight flex rounded-radius10 bg-lightBrownTP items-center px-right">
        <SearchIcon />
        <input className="text-inputSize bg-transparent outline-none mx-input h-searchInputHeight leading-searchInput grow" />
      </form>
    </>
  );
}
