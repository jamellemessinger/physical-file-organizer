import React from 'react';
import SearchBar from './SearchBar';
import SearchBarButton from './SearchBarButton';
import ProfileIcon from '../user-navigation/ProfileIcon';

export default function SearchContainer() {
  return (
    <>
      <SearchBar />
      <SearchBarButton />
      <ProfileIcon />
    </>
  );
}
