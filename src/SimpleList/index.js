import React from "react";
import ListBody from "./components/ListBody";
import { WrapListBody } from "./common/styledComponents";
import Headers from "./components/Headers";

const SimpleList = () => {
  return (
    <WrapListBody>
      <Headers/>
      <ListBody/>
    </WrapListBody>
  );
};

export default SimpleList