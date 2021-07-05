import styled from 'styled-components';

export const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;

  h1 {
    color: ${({ theme }) => theme.mainColors.blue};
    letter-spacing: 10px;
    text-transform: uppercase;
    margin: 0 0 10px;
  }

  h2 {
    color: crimson;
    /* text-align: right; */
    letter-spacing: 5px;
    /* text-transform: uppercase; */
    margin: 0 0 10px;
  }

  p {
    color: navy;
    margin: 0;
  }
`;
