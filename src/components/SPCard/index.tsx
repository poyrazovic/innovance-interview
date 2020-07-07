import React from 'react';
import { SPCardWrapper, SPCardHeading } from './index.styled';

interface SPCardProps {
  heading: string,
  children: React.ReactNode
}

const SPCard = ({ heading, children } : SPCardProps) => {
  return (
    <SPCardWrapper>
      <SPCardHeading>{heading}</SPCardHeading>
      {children}
    </SPCardWrapper>
  )
}

export default SPCard;
