export default function getFilterItems(files) {
  const filterItems = {
    category: [],
    location: [],
    tags: [],
  };

  files.forEach((file) => {
    // category
    if (file.category) {
      const value = file.category.trim().toLowerCase();
      if (!filterItems.category.includes(value)) {
        filterItems.category.push(value);
      }
    }

    // location
    if (file.location) {
      const value = file.location.trim().toLowerCase();
      if (!filterItems.location.includes(value)) {
        filterItems.location.push(value);
      }
    }

    // tags
    if (file.tags) {
      const tags = file.tags
        .split(',')
        .map((tag) => tag.trim().toLowerCase())
        .filter(Boolean);

      tags.forEach((tag) => {
        if (!filterItems.tags.includes(tag)) {
          filterItems.tags.push(tag);
        }
      });
    }
  });

  return filterItems;
}
