function MenuItem({ name }) {
  return (
    <>
      {/* <!-- menu item --> */}
      <div className="group">
        <a href="#">{name}</a>
        <div className="mx-2 mt-2 border-b-2 border-black opacity-0 duration-500 group-hover:opacity-100"></div>
      </div>
    </>
  );
}

export default MenuItem;
