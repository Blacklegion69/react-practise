import HeroSec from "./HeroSec";
import Login from "./Login";
export default function Condition() {
  let isLogined = true;

  if (isLogined) {
    return <HeroSec />;
  } else {
    return <Login />;
  }
}
