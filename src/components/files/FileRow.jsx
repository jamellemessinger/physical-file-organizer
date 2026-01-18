export default function FileRow({ file, isSelected, onClick }) {
  return (
    <div
      className={`file-row ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <span>{file.title}</span>
      <span>{file.category}</span>
      <span>{file.location}</span>
      <span>{file.tags.join(', ')}</span>
    </div>
  );
}
