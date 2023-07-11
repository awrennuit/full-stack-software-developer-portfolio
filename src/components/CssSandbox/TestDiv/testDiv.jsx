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
        margin: '0 auto',
        top: `${50 - height / 20}%`,
        transform,
        width,
      }}
    >
      <h1>^ TOP ^</h1>
    </div>
  );
}
