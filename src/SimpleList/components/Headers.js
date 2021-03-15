import React from 'react'
import {HeaderTitle, WrapHeaders} from "../common/styledComponents";

const Headers = () => {
  return (
    <WrapHeaders>
      <HeaderTitle className={'todo'}>
        TODO
      </HeaderTitle>
      <HeaderTitle className={'progress'}>
        PROGRESS
      </HeaderTitle>
      <HeaderTitle className={'complete'}>
        COMPLETE
      </HeaderTitle>
    </WrapHeaders>
  )
};

export default Headers