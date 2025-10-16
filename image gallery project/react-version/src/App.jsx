import MenuItem from "./components/MenuItem";
import SearchArea from "./components/SearchArea";
import UploadButton from "./components/UploadButton";
import ImageSection from "./components/ImageSection";

function App() {
  return (
    <>
      {/* <!-- global container --> */}
      <div className="flex min-h-screen items-center justify-center bg-cyan-50">
        {/* <!-- card container --> */}
        <div className="m-3 space-y-10 rounded-3xl bg-white p-6 shadow-2xl md:p-40">
          {/* <!-- menu container --> */}
          <div className="flex flex-col items-center justify-center space-y-3 md:mb-24 md:flex-row md:justify-end md:space-y-0 md:space-x-8">
            <MenuItem name="Vector" />
            <MenuItem name="Illustrations" />
            <MenuItem name="Images" />
            <MenuItem name="Icons" />
          </div>

          {/* <!-- search container --> */}
          <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
            <SearchArea />
            <UploadButton />
          </div>

          {/* <!-- gallery container --> */}
          <div className="grid gap-4 md:grid-cols-3">
            <ImageSection
              name="Abstract Painting"
              smallText="245 Likes - 35 Shares"
              imageName="image1.jpg"
            />
            <ImageSection
              name="Abstract Painting"
              smallText="245 Likes - 35 Shares"
              imageName="image2.jpg"
            />
            <ImageSection
              name="Abstract Painting"
              smallText="245 Likes - 35 Shares"
              imageName="image3.jpg"
            />
            <ImageSection
              name="Abstract Painting"
              smallText="245 Likes - 35 Shares"
              imageName="image4.jpg"
            />
            <ImageSection
              name="Abstract Painting"
              smallText="245 Likes - 35 Shares"
              imageName="image5.jpg"
            />
            <ImageSection
              name="Abstract Painting"
              smallText="245 Likes - 35 Shares"
              imageName="image6.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
