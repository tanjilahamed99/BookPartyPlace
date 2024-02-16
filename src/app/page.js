import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import EventCategories from "@/pages/Home/EventCategories/EventCategories";
import EventByVenues from "@/pages/Home/EventsByVenues/EventByVenues";
import HomeAbout from "@/pages/Home/HomeAbout/HomeAbout";
import HomeBlog from "@/pages/Home/HomeBlog/HomeBlog";
import HomeContact from "@/pages/Home/HomeContact/HomeContact";
import Promotion from "@/pages/Home/Promotion/Promotion";
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

      {/* Home blog section */}
      <HomeBlog />
      
      {/* promotion */}
      <Promotion />

      {/* Home About */}
      <HomeAbout />

      {/* Events Published by Venues */}
      <EventByVenues />

      {/* footer */}
      <Footer />

    </div>
  );
}
