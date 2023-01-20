import { ImLibrary, ImLinkedin } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

export default function header() {
  return (
    <>
      <header className="w-screen flex justify-between items-center sticky top-0 bg-slate-400 p-4">
        <div>
          <a href="/">
            <ImLibrary className="text-slate-900 text-3xl" />
          </a>
        </div>
        <div className="flex justify-between items-center gap-3 bg-slate-900 px-3 rounded-full">
          <input
            className="w-36 bg-slate-900 outline-none border-none "
            type="text"
            placeholder="search your items"
          />
          <FaSearch />
        </div>
        <div className="flex justify-between items gap-4">
          <a href="/">
            <BsFacebook className="text-slate-900 text-xl" />
          </a>
          <a href="/">
            <ImLinkedin className="text-slate-900 text-xl" />
          </a>
        </div>
      </header>
    </>
  );
}
