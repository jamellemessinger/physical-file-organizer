export default function FileRow({ file, isSelected, onClick, deleteFile }) {
  return (
    <div
      className={`file-row ${isSelected ? 'bg-gray-300' : ''} grid grid-cols-11 gap-5 px-3 py-1 border`}
      onClick={onClick}
    >
      <span className="col-span-4">{file.title}</span>
      <span className="col-span-2">{file.category}</span>
      <span className="col-span-2">{file.location}</span>
      <span className="col-span-2">{file.tags}</span>
      {isSelected && (
        <button
          className="rounded-lg w-10"
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
