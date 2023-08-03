import DropdownItem from "./DropdownItem";
import { useState } from "react";

interface DropdownProps {
  title: string;
}

function Dropdown({ title }: DropdownProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleClick = () => {
    setDropdownOpen(!dropdownOpen);
    console.log("dropdownopen", dropdownOpen);
  };

  return (
    <li className="nav-item">
      <a className="nav-link" role="button" onClick={handleClick}>
        {title}
      </a>
      {dropdownOpen && (
        <div className="dropdown-menu">
          <ul className="dropdown-menu">
            <DropdownItem title="Games" link="#" />
            <DropdownItem title="Other Stuff" link="#" />
          </ul>
        </div>
      )}
    </li>
  );
}

export default Dropdown;
