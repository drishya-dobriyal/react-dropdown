import { useState } from "react";
import "./Dropdown.css";

function Dropdown({ itemsList }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownValue, setDropdownValue] = useState(null);

  const getDisplay = () => {
    if (dropdownValue) return dropdownValue.label;
    return "Select from drop-down ?";
  };

  const selectDropdown = (item) => {
    setDropdownValue(item);
    setShowDropdown(false);
  };
  return (
    <div
      className="dropdown-container"
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <div className="dropdown-input">
        <div className="dropdown-selected-value">{getDisplay()}</div>
      </div>
      {
        <div className="dropdown-menu">
          {showDropdown &&
            itemsList.map(({ label, value }, i) => (
              <div
                className="dropdown-item"
                onClick={(e) => selectDropdown({ label, value })}
                value={value}
              >
                {label}
              </div>
            ))}
        </div>
      }
    </div>
  );
}

export default Dropdown;
