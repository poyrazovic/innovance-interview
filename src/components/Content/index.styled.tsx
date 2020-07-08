import styled from 'styled-components';
import { hexToRgb } from '@/config/utils';

export const ContentWrapper = styled.section`
  padding: 50px 0;

  h1 {
    font-size: 32px;
    font-weight: 700;
  }

  p {
    line-height: 1.5;
  }

  .ant {
    &-card {
      &-body {
        box-shadow: 0 7px 20px 2px rgba(${hexToRgb("#1c6af9")}, .15);
      }
    }
  }
`;
