import UseAllSuggestionData from "@/Hooks/UseAllSuggestionData";
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
  const data = await UseAllSuggestionData();

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Search bar / search section */}
      <SearchBar />

      <div className=" space-y-16 md:space-y-20">
        {/* suggestion component */}
        <Suggestion data={data} />

        {/* event categories */}
        <EventCategories data={data} />

        {/* Unique Venues*/}
        <UniqueVenues data={data} />

        {/* work commands */}
        <WorkCommand />

        {/* Home contact */}
        <HomeContact />

        {/* Home blog section */}
        <HomeBlog data={data} />

        {/* promotion */}
        <Promotion data={data} />

        {/* Testimonial */}
        <Testimonials />

        {/* Home About */}
        <HomeAbout />

        {/* Events Published b Venues */}
        <EventByVenues data={data} />
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;
