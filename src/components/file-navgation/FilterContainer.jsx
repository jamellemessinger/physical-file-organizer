import FilterComponent from './FilterComponent';

export default function FilterContainer({
  isLoading,
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
          isLoading={isLoading}
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
