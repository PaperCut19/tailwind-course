import MenuItem from "./components/MenuItem";
import SearchArea from "./components/SearchArea";
import UploadButton from "./components/UploadButton";
import ImageSection from "./components/ImageSection";
import imageArray from "./imagesInfo";

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
            {imageArray.map((image, index) => {
              return (
                <ImageSection
                  key={index}
                  imageFileName={image.imageFileName}
                  name={image.name}
                  smallText={image.smallText}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
