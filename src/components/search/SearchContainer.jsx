import React from 'react';
import SearchBar from './SearchBar';
import SearchBarButton from './SearchBarButton';
import UserIcon from '../user-navigation/UserIcon';

export default function SearchContainer({ onUserIconClick }) {
  return (
    <>
      <SearchBar />
      <SearchBarButton />
      <UserIcon onClick={onUserIconClick} />
    </>
  );
}
