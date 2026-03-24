export const Detail = [
  {
    id: 1,
    image: "/images/hotelsite.jpg",
    subImages: [1, 2, 3, 4],
    shortDetail:
      "A multi-functional booking platform for hotels, cars, and event halls with integrated payment and cost estimation.",
    overview:
      "This hotel booking platform allows users to seamlessly book rooms, rent cars, and reserve event halls. It includes an expense calculator to estimate costs and integrates Paystack for payment processing. Users can also explore images of rooms and halls before making reservations.",
    challenges:
      "Managing multiple booking options (rooms, cars, halls) while keeping the UI intuitive. Handling dynamic cost calculation and integrating a reliable payment system.",
    solution:
      "Structured the application state to handle different booking types efficiently and implemented reusable components for scalability. Built a custom cost calculator for real-time updates and integrated Paystack API for secure payment testing.",
    techStack: ["React", "CSS"],
    features: [
      "Hotel booking system",
      "Car rental service",
      "Availability checking",
      "Hotel, car, and hall preview",
      "Paystack payment integration (testing)",
      "Contact form for inquiries",
    ],
    title: "Hotel Booking site",
    live: "https://hotel-booking-pi-umber.vercel.app/",
  },
  {
    id: 2,
    image: "/images/movie.jpg",
    subImages: [],
    shortDetail:
      "A responsive movie platform with authentication, search functionality, and media playback features.",
    overview:
      "Axionis Movies is a web application that allows users to stream movie trailers and search for content. It features a complete authentication system, enabling users to sign up, log in, update their profiles, upload images, and manage passwords. The application is fully responsive across devices.",
    challenges:
      "Implementing secure authentication and managing user sessions while ensuring smooth navigation. Handling media playback and search performance efficiently.",
    solution:
      "Integrated authentication workflows with proper state management and protected routes. Optimized search functionality and ensured smooth media playback using efficient component structure and lazy loading where necessary.",
    techStack: ["React", "Tailwind"],
    features: [
      "User authentication and profile management",
      "Movie details display",
      "Integrated movie player",
      "Search functionality",
    ],
    title: "Axionis Movies",
    live: "https://form-validation-six-gold.vercel.app/",
  },
  {
    id: 3,
    image: "/images/axios.jpg",
    subImages: [],
    shortDetail:
      "An AI-powered chatbot application that provides real-time responses to user queries through API integration.",
    overview:
      "Axionis Chatbot is an AI-powered web application that enables users to ask questions and receive intelligent responses. It is designed to showcase the practical value of AI and encourage wider adoption among users.",
    challenges:
      "Handling API response delays and maintaining a smooth conversational experience. Managing user input and rendering dynamic responses effectively.",
    solution:
      "Implemented loading states and optimized API calls to improve user experience. Designed a clean chat interface with efficient state updates to handle real-time conversations.",
    techStack: ["React", "Tailwind", "API"],
    features: ["Interactive AI chat functionality"],
    title: "Axionis Chatbot",
    language: "Built with: React, Tailwind and API",
    live: "https://axios-chatbot.vercel.app/",
  },
  {
    id: 4,
    image: "/images/shoppy.jpg",
    subImages: [],
    shortDetail:
      "A modern eCommerce platform with authentication, cart management, and seamless checkout experience.",
    overview:
      "Shoppy Store is a feature-rich eCommerce platform that provides a seamless shopping experience. Users can browse products, add items to cart or wishlist, and filter by categories. It includes secure authentication, profile management, and Paystack integration for payment testing.",
    challenges:
      "Managing global state for cart and wishlist across the application. Implementing secure authentication and handling protected routes with a smooth user experience.",
    solution:
      "Used centralized state management for cart and wishlist to ensure consistency across pages. Implemented authentication with route protection and optimized API interactions for better performance.",
    techStack: ["NextJs", "Typescript", "Tailwind", "API", "Supabase"],
    features: [
      "Product checkout system",
      "Payment integration (testing)",
      "Detailed product view",
    ],
    title: "Shoppy store",
    live: "https://shoppystore-lac.vercel.app/",
  },
  {
    id: 5,
    image: "/images/shoppy.jpg",
    subImages: [],
    shortDetail:
      "An audio-focused eCommerce platform with real-time data handling and advanced product interactions.",
    overview:
      "Audiophile is an eCommerce platform focused on headphones and audio products. It allows users to browse, search, and filter products, as well as manage carts and wishlists. It also includes profile image uploads and Paystack integration for payment testing, with product data managed using Convex.",
    challenges:
      "Managing real-time product data and ensuring consistent updates across the application. Handling complex user interactions like filtering and cart updates.",
    solution:
      "Leveraged Convex for real-time data handling and ensured efficient state synchronization across components. Built reusable UI components and optimized filtering logic for better performance.",
    techStack: ["NextJS", "Typescript", "Tailwind", "API", "Convex"],
    features: [
      "Product checkout system",
      "Payment integration (testing)",
      "Detailed product view",
      "Product data management with Convex",
    ],
    title: "Audiophile",
    live: "https://ecommerce-hng-seven.vercel.app/",
  },
];
