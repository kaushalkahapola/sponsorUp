import { useState, useEffect } from "react";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

/**
 * Sidebar component for the organizer view.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} [props.selectedMenu="Dashboard"] - The initially selected menu item [Dashboard, Calendar, My Events, Proposals].
 * @param {boolean} [props.initialIsOpen=false] - The initial state of the sidebar (open/closed).
 * @returns {JSX.Element} The rendered sidebar component.
 */
const OrganizerSideBar = ({
  selectedMenu = "Dashboard",
  initialIsOpen = false,
}) => {
  const [selected, setSelected] = useState(selectedMenu);
  const [isOpen, setIsOpen] = useState(initialIsOpen);
  const [notificationCounts, setNotificationCounts] = useState({
    Proposals: 0, // Default count for Proposals
  });

  const menuItems = [
    { name: "Dashboard", link: "./" },
    { name: "Calendar", link: "./" },
    { name: "My Events", link: "./" },
    { name: "Proposals", link: "./" },
  ];

  useEffect(() => {
    // Simulate fetching notification counts
    const fetchNotificationCounts = () => {
      // Replace with actual API call or logic to fetch counts
      setTimeout(() => {
        setNotificationCounts((prevCounts) => ({
          ...prevCounts,
          Proposals: Math.floor(Math.random() * 20), // Random count for testing
        }));
      }, 500); // Simulating delay for fetching data
    };

    fetchNotificationCounts(); // Initial fetch
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Menu icon for small screens */}
      <div className="md:hidden flex justify-between items-center p-4 bg-neutral-50 shadow border-b border-white z-50">
        <button onClick={toggleSidebar} className="text-xl">
          {isOpen ? (
            <Cross2Icon className="w-6 h-6 text-gray-700" />
          ) : (
            <HamburgerMenuIcon className="w-6 h-6 text-gray-700" />
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
        className={`fixed left-0 top-0 w-56 h-screen bg-neutral-50 shadow border-r border-white z-50 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 ${
          isOpen ? "pt-16 md:pt-0" : "" // Add top padding only when sidebar is open on smaller screens
        }`}
      >
        {/* Sidebar content */}
        <div className="px-4 pt-5 pb-10 flex flex-col justify-start items-center">
          {/* Menu items */}
          {menuItems.map((item) => (
            <Link
              to={item.link}
              key={item.name}
              onClick={() => {
                setSelected(item.name);
                setIsOpen(false);
              }}
              className={`self-stretch px-4 py-2 rounded-lg flex items-center gap-2 mb-2 ${
                selected === item.name
                  ? "bg-violet-600 text-white font-bold"
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