import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  text-align: center;
  .serviceItem__icon {
    svg {
      width: 3rem;
    }
  }
  .serviceItem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function ServiceSectionItem({
  icon = <MdDesktopMac />,
  title = 'web development',
  descr = 'Lorems Ipsum is simply dummy text of the printing and typesettin',
}) {
  return (
    <ItemStyles>
      <div className="serviceItem__icon">{icon}</div>
      <div className="serviceItem__title ">{title}</div>
      <PText>{descr}</PText>
    </ItemStyles>
  );
}
