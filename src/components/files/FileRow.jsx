export default function FileRow({ file }) {
  return (
    <div className="file-row">
      <span>{file.title}</span>
      <span>{file.category}</span>
      <span>{file.location}</span>
      <span>{file.tags.join(', ')}</span>
    </div>
  );
}
