import UseAllSuggestionData from "@/Hooks/UseAllSuggestionData";
import Footer from "@/Shared/Footer/Footer";
import Navbar from "@/Shared/Navbar/Navbar";
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

  const data = await UseAllSuggestionData()

  return (
    <div>

      {/* Navbar */ }
      < Navbar />

      <div className="">
        {/* Search bar / search section */}
        <SearchBar />

        {/* suggestion component */}
        <Suggestion data={data} />

        {/* event categories */}
        <EventCategories data={data} />
      </div>

      {/* Unique Venues*/}
      <UniqueVenues data={data} />

      {/* Testimonial */}
      {/* <Testimonials /> */}

      {/* work commands */}
      <WorkCommand />

      {/* Home contact */}
      <HomeContact />

      {/* Home blog section */}
      <HomeBlog data={data} />

      {/* promotion */}
      <Promotion data={data} />

      {/* Home About */}
      <HomeAbout />

      {/* Events Published b Venues */}
      <EventByVenues data={data} />

      {/* footer */}
      <Footer />

    </div >
  );
}

export default Home
