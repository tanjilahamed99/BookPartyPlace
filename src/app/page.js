import Navbar from "@/components/Shared/Navbar/Navbar";
import SearchBar from "@/pages/Home/SearchBar/SearchBar";

export default function Home() {
  return (
    <div>

      {/* header section */}
      <header>

        {/* Navbar */}
        <Navbar />

        {/* Search bar / search section */}
        <SearchBar />

      </header>

      {/* body section */}
      <body>

      </body>

      {/* footer section */}
      <footer>

      </footer>
    </div>
  );
}
