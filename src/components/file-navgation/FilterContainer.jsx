import FilterComponent from './FilterComponent';

export default function FilterContainer({ onClick, filters }) {
  return (
    <div className='p-3'>
      {Object.entries(filters).map(([key, filter]) => (
        <FilterComponent
          key={key}
          name={key}
          title={filter.title}
          isExpanded={filter.isExpanded}
          onClick={onClick}
        />
      ))}
    </div>
  );
}
