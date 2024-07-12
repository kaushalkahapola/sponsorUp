import { useState, useEffect } from "react";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { proposals } from "../dummy_data/data";
import getUserType from "../firebase/getUserType";

/**
 * Sidebar component for the organizer view.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} [props.selectedMenu="Dashboard"] - The initially selected menu item [Dashboard, Calendar, My Events, Proposals].
 * @param {boolean} [props.initialIsOpen=false] - The initial state of the sidebar (open/closed).
 * @param {Function} [props.onMenuClick] - Callback function when a menu item is clicked.
 * @returns {JSX.Element} The rendered sidebar component.
 */
const OrganizerSideBar = ({
  selectedMenu = "Dashboard",
  initialIsOpen = false,
  onMenuClick,
}) => {
  const [selected, setSelected] = useState(selectedMenu);
  const [isOpen, setIsOpen] = useState(initialIsOpen);
  const [notificationCounts, setNotificationCounts] = useState({
    Proposals: 0, // Default count for Proposals
  });

  const organizerMenuItems = [
    { name: "Dashboard", link: "/account/dashboard" },
    // { name: "Calendar", link: "/account/proposals" },
    { name: "My Events", link: "/account/myevents" },
    { name: "Proposals", link: "/account/proposals" },
    { name: "Settings", link: "/account/settings" },
  ];

  const sponsorMenuItems = [
    { name: "Proposals", link: "/account/proposals" },
    { name: "Settings", link: "/account/settings" },
  ];

  const [menuItems, setMenuItems] = useState(sponsorMenuItems);

  useEffect(() => {
    // Simulate fetching notification counts
    const fetchNotificationCounts = () => {
      // Fetch notification counts for Proposals
      const proposalNotifications = proposals.filter(
        (proposal) => proposal.status === "Pending"
      );
      setNotificationCounts((prevCounts) => ({
        ...prevCounts,
        Proposals: proposalNotifications.length,
      }));
    };

    const fetchUserType = () => {
      getUserType().then((type) => {
        if (type !== "sponsor") {
          setMenuItems(organizerMenuItems);
        }
      });
    };

    fetchUserType();
    fetchNotificationCounts(); // Initial fetch
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating button for small screens */}
      <div className="md:hidden fixed top-16 left-8 z-50">
        <button
          onClick={toggleSidebar}
          className="p-2 bg-white rounded-md shadow-md"
        >
          {isOpen ? (
            <Cross2Icon className="w-5 h-5 text-primary" />
          ) : (
            <HamburgerMenuIcon className="w-5 h-5 text-primary" />
          )}
        </button>
      </div>
      {/* Overlay for small screens */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      />
      {/* Sidebar container */}
      <div
        className={`fixed left-0 top-0 w-56 min-h-[100vh] bg-neutral-50 shadow border-r border-white z-50 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 ${
          isOpen ? "pt-16 md:pt-0" : "" // Add top padding only when sidebar is open on smaller screens
        }`}
      >
        {/* Sidebar content */}
        <div className="px-4 pt-8 pb-10 flex flex-col justify-start items-center">
          {/* Menu items */}
          {menuItems.map((item) => (
            <Link
              to={item.link}
              key={item.name}
              onClick={() => {
                setSelected(item.name);
                setIsOpen(false);
                if (onMenuClick) onMenuClick(item.name); // Invoke callback if provided
              }}
              className={`self-stretch px-4 py-2 rounded-lg flex items-center gap-2 mb-2 ${
                selected === item.name
                  ? "bg-primary text-white font-bold"
                  : "bg-transparent text-gray-600"
              }`}
            >
              {/* Notification badge */}
              <div className="w-6 h-6 flex justify-center items-center">
                {item.name === "Proposals" &&
                  notificationCounts.Proposals > 0 && (
                    <div className="px-2 py-1 bg-red-500 rounded-full text-white text-xs font-normal">
                      {notificationCounts.Proposals}
                    </div>
                  )}
              </div>
              {/* Menu item text */}
              <span className="text-sm font-['Poppins'] leading-snug">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default OrganizerSideBar;
