const data = {
  categories: [
    {
      id: 1,
      name: "Cleaning",
      backgroundColor: "#ffcc00",
      iconUrl: "https://example.com/icon-cleaning.png",
    },
    {
      id: 2,
      name: "Plumbing",
      backgroundColor: "#00ffcc",
      iconUrl: "https://example.com/icon-plumbing.png",
    },
  ],
  businesses: [
    {
      id: 1,
      name: "Clean House Co.",
      description: "Professional house cleaning service.",
      address: "123 Clean St, Clean City",
      category: "Cleaning",
      contactPerson: "John Doe",
      email: "contact@cleanhouse.com",
      photos: [
        "https://example.com/photo1.jpg",
        "https://example.com/photo2.jpg",
      ],
    },
    {
      id: 2,
      name: "Plumb Good Co.",
      description: "Expert plumbing service.",
      address: "456 Fix St, Plumb City",
      category: "Plumbing",
      contactPerson: "Jane Smith",
      email: "info@plumbgood.com",
      photos: [
        "https://example.com/photo3.jpg",
        "https://example.com/photo4.jpg",
      ],
    },
  ],
  bookings: [
    {
      id: 1,
      businessId: 1,
      date: "2023-10-10",
      time: "10:00",
      userEmail: "user1@example.com",
      userName: "User One",
      status: "confirmed",
    },
    {
      id: 2,
      businessId: 2,
      date: "2023-10-11",
      time: "14:00",
      userEmail: "user2@example.com",
      userName: "User Two",
      status: "pending",
    },
  ],
};

module.exports = data;
