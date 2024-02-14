import Navbar from "@/components/Shared/Navbar/Navbar";
import EventCategories from "@/pages/Home/EventCategories/EventCategories";
import SearchBar from "@/pages/Home/SearchBar/SearchBar";
import Suggestion from "@/pages/Home/Suggestion/Suggestion";
import WorkCommand from "@/pages/Home/WorkCommand/WorkCommand";

export default function Home() {
  return (
    <div>

      {/* Navbar */}
      <Navbar />

      <div className="">
        {/* Search bar / search section */}
        <SearchBar />

        {/* suggestion component */}
        <Suggestion />

        {/* event categories */}
        <EventCategories />
      </div>

      <WorkCommand />

    </div>
  );
}
