import Dropdown from "react-bootstrap/Dropdown";

function DropdownComponent({
  variant = "light",
  buttonTitle,
  dropdownItems,
  drop,
  arrowIcon = false,
}) {
  return (
    <>
      <Dropdown drop={drop}>
        <Dropdown.Toggle
          className={!arrowIcon ? "removeIcon" : null}
          variant={variant}
        >
          {buttonTitle}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {dropdownItems
            ? dropdownItems.map((item, i) => {
                return (
                  <Dropdown.Item href={`#/action-${i}`}>{item}</Dropdown.Item>
                );
              })
            : null}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default DropdownComponent;
