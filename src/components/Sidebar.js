import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const unreadCount = useSelector((state) => state.email.unreadCount);

  return (
    <>
      <NavLink to="/home/mail">
        <Button variant="dark" className="w-100">
          Compose
        </Button>
      </NavLink>
      <NavLink to="/home/inbox">
        <Button variant="outline-dark" className="mt-4 w-100">
          Inbox ({unreadCount})
        </Button>
      </NavLink>
      <NavLink to="/home/sent">
        <Button variant="outline-dark" className="mt-2 w-100">
          Sent
        </Button>
      </NavLink>
    </>
  );
};

export default Sidebar;
