import "./style.css";

const Grid = () => {
  let items = [];
  for (let i = 0; i < 20; i++) {
    items.push(
      <div className="before:blur-lg after:blur-lg box overflow-hidden w-96 m-2 p-2 relative flex justify-center items-center flex-col bg-slate-100 rounded">
        <h1 className="text-center m-5 text-2xl underline text-orange-600">
          {" "}
          Random_Image{" "}
        </h1>
        <img
          className="rounded"
          src="https://picsum.photos/3000"
          alt="not found"
          width="200px"
          height="200px"
        />
      </div>
    );
  }
  return (
    <div className="flex-wrap w-screen min-h-fit relative m-2 flex justify-center items-center rounded">
      {items}
    </div>
  );
};
export default Grid;
