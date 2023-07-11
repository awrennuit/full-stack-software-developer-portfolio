import '../PasswordGenerator/PasswordGenerator.css';

export default function PasswordSection(props) {
  return (
    <>
      <div className="password-checkbox-container">
        <input
          type="checkbox"
          value={props.value}
          onChange={props.handleCheck}
          defaultChecked={props.symbolType === 'lowercase'}
        />
        <span className="password-span">Add {props.symbolType}?</span>
      </div>
      <div className="password-text-container">
        <textarea
          className="password-textarea"
          value={props.value}
          readOnly
        ></textarea>
      </div>
      <hr className="password-hr" />
    </>
  );
}
