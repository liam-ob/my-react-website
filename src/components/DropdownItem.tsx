interface DropdownItemProps {
  title: string;
  link?: string;
  handleClick?: () => void;
}

function DropdownItem({ title, link, handleClick }: DropdownItemProps) {
  return (
    <li>
      <a className="dropdown-item" onClick={handleClick} href={link}>
        {title}
      </a>
    </li>
  );
}

export default DropdownItem;
