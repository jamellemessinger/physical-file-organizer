export default function filterFiles(files, activeFilters) {
  let filteredFiles = [...files];

  filteredFiles = filteredFiles.filter((file) => {
    // check each group independently
    const categoryMatch =
      activeFilters.category.length === 0 ||
      activeFilters.category.includes(file.category.toLowerCase());
    const locationMatch =
      activeFilters.location.length === 0 ||
      activeFilters.location.includes(file.location.toLowerCase());
    const tagsMatch =
      activeFilters.tags.length === 0 ||
      file.tags
        .split(',')
        .map((tag) => tag.trim().toLowerCase())
        .some((tag) => activeFilters.tags.includes(tag));

    // AND across groups
    return categoryMatch && locationMatch && tagsMatch;
  });
  return filteredFiles;
}
