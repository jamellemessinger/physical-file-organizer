// Get all of the filters from the array of files and add them to the filters object and return that object

export default function getFilters(files, filters) {
  let newFilters = { ...filters };
  // category: {
  //       title: 'Category',
  //       isExpanded: false,
  //       items: [],
  //     },

  console.log(files)

  // Loop trough the files array
  files.forEach((file) => {
    // For every key in the individual file object
    for (const key in file) {
      // For every filter in the filters object
      for (const filter in newFilters) {
        // If the key in the file object is equal to the key in the newFilters object and the filter item is not already in the items list
        if (key === filter  && !newFilters[key].items.includes(file[key])) {
          // Add the file key value to the appropriate newFilters keys list items
          newFilters[key].items.push(file[key]);
        }
      }
    }
  });

  return newFilters;
}
