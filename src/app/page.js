import Navbar from "@/components/Shared/Navbar/Navbar";
import SearchBar from "@/pages/Home/SearchBar/SearchBar";
import Suggestion from "@/pages/Home/Suggestion/Suggestion";

export default function Home() {
  return (
    <div>

        {/* Navbar */}
        <Navbar />

        {/* Search bar / search section */}
        <SearchBar />



        {/* suggestion component */}
        <Suggestion />


    </div>
  );
}
