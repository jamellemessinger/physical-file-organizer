export default function FileRow({ file, isSelected, onClick, deleteFile }) {
  return (
    <div
      className={`file-row ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <span>{file.title}</span>
      <span>{file.category}</span>
      <span>{file.location}</span>
      {/* <span>{file.tags.join(', ')}</span> */}
      {isSelected && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            deleteFile(file.id);
          }}
        >
          X
        </button>
      )}
    </div>
  );
}
