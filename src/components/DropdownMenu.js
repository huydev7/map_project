import React from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: #f4b400;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  
  &:hover {
    background-color: #e4a700;
  }
`;

const DropdownContent = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 4px;
`;

const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const DropdownMenu = ({ items, title, show, onClick, ref }) => {
  return (
    <DropdownContainer ref={ref}>
      <DropdownButton onClick={onClick}>{title}</DropdownButton>
      <DropdownContent show={show}>
        {items.map((item, index) => (
          <DropdownItem href={item.link} key={index}>{item.text}</DropdownItem>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default DropdownMenu;
