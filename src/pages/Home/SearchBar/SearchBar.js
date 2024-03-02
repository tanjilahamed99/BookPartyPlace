import AllSearchText from "@/lib/searchText";
import { GoSearch } from "react-icons/go";

const SearchBar = () => {
  const { SEARCH_TITLE } = AllSearchText;
  return (
    <div className="md:my-10 my-5">
      {/* title */}
      <h2 className="md:text-4xl text-xl  font-bold text-center text-[#040404] md:leading-[52px]">
        {SEARCH_TITLE}
      </h2>

      {/* search input section */}
      <div className="lg:w-1/2 mx-auto mt-5 relative w-[80%]">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered md:py-7 w-full rounded-r-full rounded-l-full"
        />
        <GoSearch className="absolute md:right-2 md:top-1 top-2 right-2 bg-primary-color rounded-full md:text-5xl text-3xl md:p-2 p-1" />
      </div>
    </div>
  );
};

export default SearchBar;
