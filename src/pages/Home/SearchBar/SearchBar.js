import { GoSearch } from "react-icons/go";


const SearchBar = () => {
    return (
        <div className="my-10">
            <h2 className="text-4xl font-bold text-center text-[#040404] leading-[52px]">Find the perfect Venue for any <br /> Event In Hyderabad</h2>

            {/* search input section */}
            <div className="w-1/2 mx-auto mt-5 relative">
                <input type="text" placeholder="Type here" className="input input-bordered py-7 w-full rounded-r-full rounded-l-full" />
                <GoSearch className="absolute right-2 top-1 bg-primary-color rounded-full text-5xl p-2"/>
            </div>

        </div>
    );
};

export default SearchBar;