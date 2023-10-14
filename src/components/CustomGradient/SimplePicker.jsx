import ColorPicker from './ColorPicker';

export default function SimplePicker({
  colorOne,
  colorTwo,
  isToolbarOpen,
  setColorOne,
  setColorTwo,
}) {
  return (
    <div className="simple-picker">
      <ColorPicker
        color={colorOne}
        isToolbarOpen={isToolbarOpen}
        setColor={setColorOne}
      />
      <ColorPicker
        color={colorTwo}
        isToolbarOpen={isToolbarOpen}
        setColor={setColorTwo}
      />
    </div>
  );
}
