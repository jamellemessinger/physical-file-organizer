import FilterComponent from './FilterComponent';

export default function FilterContainer({
  filterNames,
  filterExpanded,
  filterItems,
  activeItems,
  handleExpandFilter,
  handleSelectFilter,
}) {
  return (
    <div className="p-3">
      {Object.keys(filterNames).map((key) => (
        <FilterComponent
          key={key}
          name={key}
          title={filterNames[key]}
          isExpanded={!!filterExpanded[key]?.isExpanded}
          items={filterItems[key]}
          activeItems={activeItems[key]}
          handleExpandFilter={handleExpandFilter}
          handleSelectFilter={handleSelectFilter}
        />
      ))}
    </div>
  );
}
