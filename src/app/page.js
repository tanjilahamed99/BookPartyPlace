import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import EventCategories from "@/pages/Home/EventCategories/EventCategories";
import HomeAbout from "@/pages/Home/HomeAbout/HomeAbout";
import HomeContact from "@/pages/Home/HomeContact/HomeContact";
import SearchBar from "@/pages/Home/SearchBar/SearchBar";
import Suggestion from "@/pages/Home/Suggestion/Suggestion";
import Testimonials from "@/pages/Home/Testimonials/Testimonials";
import UniqueVenues from "@/pages/Home/UniqueVenues/UniqueVenues";
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

      {/* Unique Venues*/}
      <UniqueVenues />

      {/* Testimonial */}
      <Testimonials />

      {/* work commands */}
      <WorkCommand />

      {/* Home contact */}
      <HomeContact />

      {/* Home About */}
      <HomeAbout />

      {/* footer */}
      <Footer />

    </div>
  );
}
