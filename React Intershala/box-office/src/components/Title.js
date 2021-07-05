import React, { memo } from 'react';
import { TitleWrapper } from './Title.styled';

const Title = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <h1>{title}</h1>
      <h2>-|Yugender|</h2>
      <p>{subtitle}</p>
    </TitleWrapper>
  );
};

export default memo(Title);
