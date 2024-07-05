// data.jsx

const sponsors = [
  {
    id: 1,
    name: "Company A",
    location: "New York",
    status: "Gold Sponsor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    categories: ["Music", "Education", "IT"],
  },
  {
    id: 2,
    name: "Company B",
    location: "San Francisco",
    status: "Silver Sponsor",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    categories: ["Finance", "Healthcare", "Technology"],
  },
  {
    id: 3,
    name: "Company C",
    location: "London",
    status: "Bronze Sponsor",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    categories: ["Retail", "Travel", "Fashion"],
  },
  {
    id: 4,
    name: "Company D",
    location: "Berlin",
    status: "Supporting Sponsor",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    categories: ["Sports", "Entertainment", "Media"],
  },
  {
    id: 5,
    name: "Company E",
    location: "Tokyo",
    status: "Platinum Sponsor",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    categories: ["Gaming", "Technology", "Education"],
  },
  {
    id: 6,
    name: "Company F",
    location: "Paris",
    status: "Gold Sponsor",
    description:
      "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.",
    categories: ["Fashion", "Art", "Media"],
  },
  {
    id: 7,
    name: "Company G",
    location: "Dubai",
    status: "Silver Sponsor",
    description: "Nullam varius, turpis et commodo pharetra.",
    categories: ["Travel", "Finance", "Real Estate"],
  },
];

const events = [
  {
    title: "Music Concert",
    category: "Music",
    datetime: "2024-07-15T19:00:00Z",
    description: "A night of live music performances.",
    location: "New York City",
    organizer: "Music Fest Org",
    coverImage: "https://picsum.photos/400/200?random=1",
    album: [
      "https://via.placeholder.com/400x200?text=1",
      "https://via.placeholder.com/400x200?text=2",
      "https://via.placeholder.com/400x200?text=3",
    ],
  },
  {
    title: "Tech Conference",
    category: "Technology",
    datetime: "2024-08-20T09:00:00Z",
    description: "Latest trends in tech and innovation.",
    location: "San Francisco",
    organizer: "Tech Innovators",
    coverImage: "https://picsum.photos/400/200?random=2",
    album: [
      "https://via.placeholder.com/400x200?text=1",
      "https://via.placeholder.com/400x200?text=2",
      "https://via.placeholder.com/400x200?text=3",
    ],
  },
  {
    title: "Art Exhibition",
    category: "Art",
    datetime: "2024-09-10T10:00:00Z",
    description: "Showcasing modern art from local artists.",
    location: "London",
    organizer: "Art Gallery",
    coverImage: "https://picsum.photos/400/200?random=3",
    album: [
      "https://via.placeholder.com/400x200?text=1",
      "https://via.placeholder.com/400x200?text=2",
      "https://via.placeholder.com/400x200?text=3",
    ],
  },
  {
    title: "Business Summit",
    category: "Business",
    datetime: "2024-10-05T08:00:00Z",
    description: "Networking and workshops for business professionals.",
    location: "Dubai",
    organizer: "Business Network Inc.",
    coverImage: "https://picsum.photos/400/200?random=4",
    album: [
      "https://via.placeholder.com/400x200?text=1",
      "https://via.placeholder.com/400x200?text=2",
      "https://via.placeholder.com/400x200?text=3",
    ],
  },
  {
    title: "Healthcare Conference",
    category: "Healthcare",
    datetime: "2024-11-15T10:00:00Z",
    description: "Discussing advancements in healthcare and medicine.",
    location: "Berlin",
    organizer: "Health Innovators",
    coverImage: "https://picsum.photos/400/200?random=5",
    album: [
      "https://via.placeholder.com/400x200?text=1",
      "https://via.placeholder.com/400x200?text=2",
      "https://via.placeholder.com/400x200?text=3",
    ],
  },
  {
    title: "Film Festival",
    category: "Entertainment",
    datetime: "2024-12-01T18:00:00Z",
    description: "Premieres and screenings of the latest films.",
    location: "Paris",
    organizer: "Cinema Lovers",
    coverImage: "https://picsum.photos/400/200?random=6",
    album: [
      "https://via.placeholder.com/400x200?text=1",
      "https://via.placeholder.com/400x200?text=2",
      "https://via.placeholder.com/400x200?text=3",
    ],
  },
  {
    title: "Startup Pitch Night",
    category: "Entrepreneurship",
    datetime: "2024-12-15T17:00:00Z",
    description: "Pitch your startup ideas to potential investors.",
    location: "Silicon Valley",
    organizer: "Startup Hub",
    coverImage: "https://picsum.photos/400/200?random=7",
    album: [
      "https://via.placeholder.com/400x200?text=1",
      "https://via.placeholder.com/400x200?text=2",
      "https://via.placeholder.com/400x200?text=3",
    ],
  },
];

export { sponsors, events };
