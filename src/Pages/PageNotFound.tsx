import { Link } from "react-router-dom";
import BackgroundParallax from "../Components/BackgroundParallax/BackgroundParallax";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full overflow-hidden">
      <BackgroundParallax
        pageDescription={"Page Not Found"}
        buttons={<Link to="/">Home</Link>}
        // parallaxBgImage={"/src/assets/bg.jpg"}
      />
    </div>
  );
};

export default PageNotFound;
