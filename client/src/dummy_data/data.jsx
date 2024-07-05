// data.jsx

const sponsors = [
  {
    id: 1,
    name: "Company A",
    location: "New York",
    status: "Gold Sponsor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    categories: ["Music", "Education", "IT"],
    avatar: "https://picsum.photos/200?random=1",
  },
  {
    id: 2,
    name: "Company B",
    location: "San Francisco",
    status: "Silver Sponsor",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    categories: ["Finance", "Healthcare", "Technology"],
    avatar: "https://picsum.photos/200?random=2",
  },
  {
    id: 3,
    name: "Company C",
    location: "London",
    status: "Bronze Sponsor",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    categories: ["Retail", "Travel", "Fashion"],
    avatar: "https://picsum.photos/200?random=3",
  },
  {
    id: 4,
    name: "Company D",
    location: "Berlin",
    status: "Supporting Sponsor",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    categories: ["Sports", "Entertainment", "Media"],
    avatar: "https://picsum.photos/200?random=4",
  },
  {
    id: 5,
    name: "Company E",
    location: "Tokyo",
    status: "Platinum Sponsor",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    categories: ["Gaming", "Technology", "Education"],
    avatar: "https://picsum.photos/200?random=5",
  },
  {
    id: 6,
    name: "Company F",
    location: "Paris",
    status: "Gold Sponsor",
    description:
      "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.",
    categories: ["Fashion", "Art", "Media"],
    avatar: "https://picsum.photos/200?random=6",
  },
  {
    id: 7,
    name: "Company G",
    location: "Dubai",
    status: "Silver Sponsor",
    description: "Nullam varius, turpis et commodo pharetra.",
    categories: ["Travel", "Finance", "Real Estate"],
    avatar: "https://picsum.photos/200?random=7",
  },
];

const events = [
  {
    id: 1,
    title: "Music Concert",
    category: "Music",
    datetime: "2024-07-15T19:00:00Z",
    description: "A night of live music performances.",
    location: "New York City",
    organizer: "Music Fest Org",
    coverImage: "https://picsum.photos/400/200?random=1",
    album: [
      "https://picsum.photos/400/200?random=2",
      "https://picsum.photos/400/200?random=3",
      "https://picsum.photos/400/200?random=4",
    ],
  },
  {
    id: 2,
    title: "Tech Conference",
    category: "Technology",
    datetime: "2024-08-20T09:00:00Z",
    description: "Latest trends in tech and innovation.",
    location: "San Francisco",
    organizer: "Tech Innovators",
    coverImage: "https://picsum.photos/400/200?random=5",
    album: [
      "https://picsum.photos/400/200?random=6",
      "https://picsum.photos/400/200?random=7",
      "https://picsum.photos/400/200?random=8",
    ],
  },
  {
    id: 3,
    title: "Art Exhibition",
    category: "Art",
    datetime: "2024-09-10T10:00:00Z",
    description: "Showcasing modern art from local artists.",
    location: "London",
    organizer: "Art Gallery",
    coverImage: "https://picsum.photos/400/200?random=9",
    album: [
      "https://picsum.photos/400/200?random=10",
      "https://picsum.photos/400/200?random=11",
      "https://picsum.photos/400/200?random=12",
    ],
  },
  {
    id: 4,
    title: "Business Summit",
    category: "Business",
    datetime: "2024-10-05T08:00:00Z",
    description: "Networking and workshops for business professionals.",
    location: "Dubai",
    organizer: "Business Network Inc.",
    coverImage: "https://picsum.photos/400/200?random=13",
    album: [
      "https://picsum.photos/400/200?random=14",
      "https://picsum.photos/400/200?random=15",
      "https://picsum.photos/400/200?random=16",
    ],
  },
  {
    id: 5,
    title: "Healthcare Conference",
    category: "Healthcare",
    datetime: "2024-11-15T10:00:00Z",
    description: "Discussing advancements in healthcare and medicine.",
    location: "Berlin",
    organizer: "Health Innovators",
    coverImage: "https://picsum.photos/400/200?random=17",
    album: [
      "https://picsum.photos/400/200?random=18",
      "https://picsum.photos/400/200?random=19",
      "https://picsum.photos/400/200?random=20",
    ],
  },
  {
    id: 6,
    title: "Film Festival",
    category: "Entertainment",
    datetime: "2024-12-01T18:00:00Z",
    description: "Premieres and screenings of the latest films.",
    location: "Paris",
    organizer: "Cinema Lovers",
    coverImage: "https://picsum.photos/400/200?random=21",
    album: [
      "https://picsum.photos/400/200?random=22",
      "https://picsum.photos/400/200?random=23",
      "https://picsum.photos/400/200?random=24",
    ],
  },
  {
    id: 7,
    title: "Startup Pitch Night",
    category: "Entrepreneurship",
    datetime: "2024-12-15T17:00:00Z",
    description: "Pitch your startup ideas to potential investors.",
    location: "Silicon Valley",
    organizer: "Startup Hub",
    coverImage: "https://picsum.photos/400/200?random=25",
    album: [
      "https://picsum.photos/400/200?random=26",
      "https://picsum.photos/400/200?random=27",
      "https://picsum.photos/400/200?random=28",
    ],
  },
];


const Organizers = [
  {
    id: 1,
    name: "Robin Brown",
    email: "robin.brown@mail.com",
    organization: "Wayne Enterprises",
  },
  {
    id: 2,
    name: "Alex Miller",
    email: "alex.miller@demo.com",
    organization: "Gringotts",
  },
  {
    id: 3,
    name: "Taylor Rodriguez",
    email: "taylor.rodriguez@mail.com",
    organization: "Globex Corporation",
  },
  {
    id: 4,
    name: "Alex Doe",
    email: "alex.doe@example.com",
    organization: "Cyberdyne Systems",
  },
  {
    id: 5,
    name: "Taylor Garcia",
    email: "taylor.garcia@mail.com",
    organization: "Globex Corporation",
  },
  {
    id: 6,
    name: "Pat Smith",
    email: "pat.smith@example.com",
    organization: "Wayne Enterprises",
  },
  {
    id: 7,
    name: "Cameron Doe",
    email: "cameron.doe@demo.com",
    organization: "Soylent Corp",
  },
  {
    id: 8,
    name: "Jordan Williams",
    email: "jordan.williams@demo.com",
    organization: "MomCorp",
  },
  {
    id: 9,
    name: "John Garcia",
    email: "john.garcia@demo.com",
    organization: "Umbrella Corporation",
  },
  {
    id: 10,
    name: "Robin Johnson",
    email: "robin.johnson@demo.com",
    organization: "Stark Industries",
  },
  {
    id: 11,
    name: "Taylor Miller",
    email: "taylor.miller@mail.com",
    organization: "Acme Corp",
  },
  {
    id: 12,
    name: "Jordan Johnson",
    email: "jordan.johnson@test.com",
    organization: "Acme Corp",
  },
  {
    id: 13,
    name: "Pat Jones",
    email: "pat.jones@test.com",
    organization: "Globex Corporation",
  },
  {
    id: 14,
    name: "Morgan Miller",
    email: "morgan.miller@mail.com",
    organization: "Gringotts",
  },
  {
    id: 15,
    name: "Robin Miller",
    email: "robin.miller@test.com",
    organization: "Globex Corporation",
  },
  {
    id: 16,
    name: "Robin Rodriguez",
    email: "robin.rodriguez@demo.com",
    organization: "Umbrella Corporation",
  },
  {
    id: 17,
    name: "Chris Davis",
    email: "chris.davis@demo.com",
    organization: "Acme Corp",
  },
  {
    id: 18,
    name: "Morgan Williams",
    email: "morgan.williams@mail.com",
    organization: "Wayne Enterprises",
  },
  {
    id: 19,
    name: "Cameron Garcia",
    email: "cameron.garcia@demo.com",
    organization: "Gringotts",
  },
  {
    id: 20,
    name: "Chris Garcia",
    email: "chris.garcia@example.com",
    organization: "Soylent Corp",
  },
];

export default Organizers;



export { Organizers, sponsors, events };