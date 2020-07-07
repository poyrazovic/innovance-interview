import styled from 'styled-components';
import { hexToRgb } from '@/config/utils';

export const SPCardWrapper = styled.div`
  border-radius: 6px;
  box-shadow: 0 7px 20px 2px rgba(${hexToRgb("#1c6af9")}, .15);
  padding: 30px;
  margin: 50px 0;
  background-color: #fff;
`;

export const SPCardHeading = styled.h1`
  font-weight: 700;
  margin: 0 0 30px;
`;