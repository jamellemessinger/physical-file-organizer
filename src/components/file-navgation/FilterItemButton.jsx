export default function FilterItemButton({
  label,
  isActive,
  isDisabled,
  onSelect,
}) {
  const baseStyles =
    'rounded-full p-2 m-1 text-center transition-all duration-150';

  const stateStyles = isDisabled
    ? 'text-gray-400 bg-gray-100'
    : 'hover:bg-gray-300 hover:text-black active:bg-gray-400 active:scale-105';

  const activeStyles = isActive
    ? 'bg-blue-400 text-white border border-black'
    : 'bg-gray-200';

  return (
    <button
      className={`${baseStyles} ${stateStyles} ${activeStyles}`}
      disabled={isDisabled}
      onClick={onSelect}
    >
      {label}
    </button>
  );
}
