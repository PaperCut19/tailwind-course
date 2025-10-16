function SearchArea() {
  return (
    <>
      {/* <!-- input and svg container --> */}
      <div className="flex justify-between border-b">
        <input
          type="text"
          className="ml-6 border-none placeholder:font-thin focus:outline-none md:w-80"
          placeholder="Search"
        />
        <button className="hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 text-gray-300 duration-200 hover:scale-110"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
        </button>
      </div>
    </>
  );
}

export default SearchArea;
