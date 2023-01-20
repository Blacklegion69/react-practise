import { GiVolleyballBall } from "react-icons/gi";















export default function Themes() {
  return (
    <>
      <div className="w-[40px] h-[40px] sticky top-[80vh] f flex rounded justify-center  items-center flex-col bg-slate-100">
        <div className="flex justify-between items-center">
          <GiVolleyballBall className="text-slate-900 text-xl" />
          <GiVolleyballBall className="text-slate-900 text-xl text-green-700" />
        </div>
        <div className="flex justify-between items-center">
          <GiVolleyballBall className="text-slate-900 text-red-700 text-xl" />
          <GiVolleyballBall className="text-slate-900 text-blue-700 text-xl" />
        </div>
      </div>
    </>
  );
}
