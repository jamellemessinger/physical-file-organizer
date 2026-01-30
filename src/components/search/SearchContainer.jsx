import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchBarButton from './SearchBarButton';
import UserIcon from '../user-navigation/UserIcon';

export default function SearchContainer({
  isLoading,
  search,
  searchValue,
  onUserIconClick,
}) {
  const [showSearchBar, setShowSeachBar] = useState(false);
  const handleOnClick = () => {
    setShowSeachBar((prev) => !prev);
    search('');
  };

  return (
    <div className="flex justify-end gap-3 content-center mb-5">
      {showSearchBar && <SearchBar search={search} seachValue={searchValue} />}
      <SearchBarButton
        isLoading={isLoading}
        isShown={showSearchBar}
        onClick={handleOnClick}
      />
      {/* <UserIcon onClick={onUserIconClick} /> */}
    </div>
  );
}
