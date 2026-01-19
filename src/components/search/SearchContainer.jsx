import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchBarButton from './SearchBarButton';
import UserIcon from '../user-navigation/UserIcon';

export default function SearchContainer({ onUserIconClick }) {
  const [showSearchBar, setShowSeachBar] = useState(false);
  const handleOnClick = () => {
    setShowSeachBar((prev) => !prev);
  };

  return (
    <>
      {showSearchBar && <SearchBar />}
      <SearchBarButton isShown={showSearchBar} onClick={handleOnClick} />
      <UserIcon onClick={onUserIconClick} />
    </>
  );
}
