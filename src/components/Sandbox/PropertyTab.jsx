import Slider from './Slider';
import Toggle from './Toggle';

export default function PropertyTab({
  classClicked,
  classShow,
  heading,
  setClassClicked,
  setClassShow,
  sliderList,
  toggleList,
}) {
  return (
    <div className="sandbox-item-container">
      <div
        className={classClicked}
        onClick={() => {
          classClicked === 'sandbox-item-heading'
            ? setClassClicked('sandbox-item-heading--clicked')
            : setClassClicked('sandbox-item-heading');

          classShow === 'sandbox-item-contents'
            ? setClassShow(
                'sandbox-item-contents sandbox-item-contents--active'
              )
            : setClassShow('sandbox-item-contents');
        }}
        role="button"
      >
        <span className="sandbox-btn-arrow"></span>
        <span className="sandbox-btn-text">{heading}</span>
      </div>
      <div className={classShow}>
        <div className="sandbox-toggle-flex">
          {toggleList?.length > 0
            ? toggleList.map((item, i) => (
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
              ))
            : ''}
        </div>
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
