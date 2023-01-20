import { GiVolleyballBall } from "react-icons/gi";

export default function Themes() {
  return (
    <>
      <div className="grid grid-cols-2 bg-slate-100">
        <GiVolleyballBall className="text-slate-900 text-xl" />
        <GiVolleyballBall className="text-slate-900 text-xl" />
        <GiVolleyballBall className="text-slate-900 text-xl" />
        <GiVolleyballBall className="text-slate-900 text-xl" />
      </div>
    </>
  );
}
