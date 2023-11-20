import Slider from './Slider';
import Toggle from './Toggle';

export default function PropertyTab({
  heading,
  isExpanded,
  setIsExpanded,
  sliderList,
  toggleList,
}) {
  return (
    <div className="property-tab">
      <button
        className={`property-tab__heading${
          isExpanded ? ' property-tab__heading--open' : ''
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-controls={`${heading.replace(/\s+/g, '-').toLowerCase()}-filter`}
      >
        <span className="property-tab__arrow"></span>
        {heading}
      </button>

      <div
        id={`${heading.replace(/\s+/g, '-').toLowerCase()}-filter`}
        className={`property-tab__contents${
          isExpanded ? ' property-tab__contents--open' : ''
        }`}
      >
        {toggleList?.length > 0 ? (
          <div className="property-tab__toggle-container">
            {toggleList.map((item, i) => (
              <Toggle
                key={i}
                isChecked={item.defaultChecked}
                setVariable={item.toggleVariable}
                toggleId={item.toggleId}
                toggleLabel={item.toggleLabel}
                toggleName={item.toggleName}
                toggleType={item.toggleType}
                toggleValue={item.toggleValue}
              />
            ))}
          </div>
        ) : (
          ''
        )}
        {sliderList?.length > 0
          ? sliderList.map((item, i) => (
              <Slider
                key={i}
                maxValue={item.sliderMaxValue}
                minValue={item.sliderMinValue}
                setVariable={item.sliderSetVariable}
                sliderLabel={item.sliderLabel}
                stepValue={item.sliderStepValue}
                variableName={item.sliderVariable}
              />
            ))
          : ''}
      </div>
    </div>
  );
}
