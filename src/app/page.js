import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
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

const Home = async () => {

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Search bar / search section */}
      {/* <div className="bg-slate-50 pt-5"></div> */}

      <div className=" space-y-16 md:space-y-20">
        <div className="bg-slate-50 md:bg-white space-y-6 md:space-y-20 pt-1">
          <SearchBar />
          {/* suggestion component */}
          <Suggestion />

          {/* event categories */}
          <EventCategories />

          {/* Unique Venues*/}
          <UniqueVenues />
        </div>

        {/* work commands */}
        <WorkCommand />

        {/* Home contact */}
        <HomeContact />

        {/* Home blog section */}
        <HomeBlog />

        {/* promotion */}
        <Promotion />

        {/* Testimonial */}
        <Testimonials />

        {/* Home About */}
        <HomeAbout />

        {/* Events Published b Venues */}
        <EventByVenues />
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;
