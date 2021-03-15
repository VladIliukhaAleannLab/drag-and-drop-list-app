import React, {useEffect, useState} from "react";
import ListBody from "./components/ListBody";
import { WrapListBody } from "./common/styledComponents";
import Headers from "./components/Headers";
import Spinner from "./components/Spinner";
import { INIT_DATA } from "./common/helpers";
import { getItems } from "./common/fakeApi";

const SimpleList = () => {
  const [isLoading, setLoading] = useState(true);
  const [items, setItems] = useState(INIT_DATA);

  useEffect(() => {
    getItems()
      .then(
        (res) => {
          setItems(res);
          setLoading(false);
        })
  }, []);

  return (
    <>
      { isLoading
        ?
        <Spinner/>
        :
        <WrapListBody>
          <Headers/>
          <ListBody
            items={items}
            setItems={setItems}
          />
        </WrapListBody>
      }
    </>
  );
};

export default SimpleList