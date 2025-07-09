import {Fragment} from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <Fragment>
      {/*create container*/}
        <div className="container mx-auto p-4">
            <Navbar/>
        </div>
    </Fragment>
  );
}
