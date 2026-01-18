import FilterComponent from './FilterComponent';

export default function FilterContainer() {
  return (
    <>
      <FilterComponent filterType={'Location'} />
      <FilterComponent filterType={'Tags'} />
    </>
  );
}
