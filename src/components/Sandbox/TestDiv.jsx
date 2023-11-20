export default function TestDiv({
  backgroundColor,
  filter,
  border,
  borderRadius,
  boxShadow,
  height,
  transform,
  width,
}) {
  return (
    <div
      className="test-div"
      style={{
        backgroundColor,
        filter,
        border,
        borderRadius,
        boxShadow,
        height: `${height}px`,
        transform,
        width,
      }}
    >
      <p>&uarr; TOP &uarr;</p>
    </div>
  );
}
