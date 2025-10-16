function ImageSection({ name, smallText, imageName }) {
  return (
    <>
      {/* <!-- image 1 --> */}
      <div className="group relative hover:cursor-pointer">
        <img src={`/images/${imageName}`} className="w-72" alt="" />
        <div className="absolute right-0 bottom-0 left-0 bg-black/40 p-2 px-4 text-white opacity-0 duration-500 group-hover:opacity-100">
          <div className="flex w-full justify-between">
            <div className="font-normal">
              <p className="text-sm">{name}</p>
              <p className="text-xs">{smallText}</p>
            </div>
            <div className="flex items-center">
              <img
                src="/images/bookmark.svg"
                className="hover:scale-125"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageSection;
