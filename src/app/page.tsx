import Image from "next/image";
import Hero from "./Hero/page";
import Core from "./CoreCourses/page";
import AdvnaceCourse from "./AdvnaceCourses/page";
import Footer from "./Footer/page";

export default function Home() {
  return (
    <div>
      < Hero/>
      < Core />
      < AdvnaceCourse />
      < Footer />
    </div>
  );
}
