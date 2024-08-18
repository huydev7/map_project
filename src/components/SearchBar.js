import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  position: absolute;
  top: 20px; /* Điều chỉnh vị trí của thanh tìm kiếm */
  right: 20px;
  width: 300px;
  transition: width 0.4s ease;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 40px 10px 20px;
  border-radius: 50px;
  border: 2px solid #ddd;
  font-size: 16px;
  outline: none;
  transition: width 0.4s ease;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: #f4b400;
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  right: 20px;
  font-size: 18px;
  color: #f4b400;
`;

const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="Search anything" />
      <SearchIcon>🔍</SearchIcon>
    </SearchContainer>
  );
};

export default SearchBar;
