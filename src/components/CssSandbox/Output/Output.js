export default function Output({
  bgColor,
  blur,
  borderColor,
  borderRadius,
  borderRadiusType,
  borderStyle,
  borderWidth,
  boxBlur,
  boxColor,
  boxInset,
  boxOffsetX,
  boxOffsetY,
  boxSpread,
  height,
  rotation,
  selectText,
  setShowModal,
  showModal,
  width,
}) {
  return (
    <div
      className="sandbox-modal-output"
      style={{
        opacity: showModal ? 1 : 0,
        transition: showModal ? "opacity 0.3s" : "0.3s",
        visibility: showModal ? "visible" : "hidden",
      }}
    >
      <h3>Here's Your CSS</h3>
      <div
        className="sandbox-modal-output-content"
        id="output"
        onClick={() => selectText("output")}
      >
        .my-class {"{"}
        <br />
        &nbsp;&nbsp;background-color: {bgColor};
        {+blur !== 0 ? (
          <>
            <br />
            &nbsp;&nbsp;blur: {blur}px;
          </>
        ) : (
          ""
        )}
        {+borderWidth !== 0 ? (
          <>
            <br />
            &nbsp;&nbsp;border: {borderWidth}px {borderStyle} {borderColor};
          </>
        ) : (
          ""
        )}
        {+borderRadius !== 0 ? (
          <>
            <br />
            &nbsp;&nbsp;border-radius: {borderRadius}{borderRadiusType};
          </>
        ) : (
          ""
        )}
        {+boxOffsetX !== 0 || +boxOffsetY !== 0 || +boxBlur !== 0 || +boxSpread !== 0 ? (
          <>
            <br />
            &nbsp;&nbsp;box-shadow: {boxInset} {boxOffsetX}px {boxOffsetY}px {boxBlur}px {boxSpread}px {boxColor};
          </>
        ) : (
          ""
        )}
        <br />
        &nbsp;&nbsp;height: {height}px;
        {+rotation !== 0 ? (
          <>
            <br />
            &nbsp;&nbsp;transform: rotate({rotation}deg);
          </>
        ) : (
          ""
        )}
        <br />
        &nbsp;&nbsp;width: {width}px;
        <br />
        {"}"}
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          className="sandbox-btn-modal"
          onClick={() => setShowModal(!showModal)}
        >
          Got It
        </button>
      </div>
    </div>
  );
}
