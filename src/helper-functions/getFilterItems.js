export default function getFilterItems(files) {
  let filterItems = {
    category: [],
    location: [],
    tags: [],
  };

  if (files[0]) {
    files.forEach((file) => {
      for (const key in file) {
        for (const filter in filterItems) {
          if (
            key === filter &&
            !filterItems[filter].includes(file[key]) &&
            key !== 'tags'
          ) {
            filterItems[filter].push(file[key]);
          } else if (key === 'tags') {
            let tags = file[key].split(',').map((tag) => tag.trim());
            tags.forEach((tag) => {
              if (!filterItems[key].includes(tag)) {
                filterItems[key].push(tag);
              }
            });
          }
        }
      }
    });
  }

  return filterItems;
}
