export const projects = [
    {
        title: "TaskMinder - Personal Productivity Hub",
        description: "A comprehensive task management Android application built with Java and Android Studio. Features intuitive local storage, reminder notifications, and priority sorting.",
        overview: "TaskMinder is a robust mobile application designed to streamline personal task management. Built applying OOP principles in Java, it leverages Android's UI components and local SQLite databases (via Room) to provide a seamless user experience. It ensures tasks are never missed with reliable background services and broadcast receivers for notifications.",
        technologies: [
            "Java",
            "Android Studio",
            "XML Layouts",
            "Room Database",
            "Material Design",
            "Background Services",
            "Broadcast Receivers"
        ],
        features: [
            "Create, update, and delete tasks instantly using Room DB",
            "Categorize tasks by priority and due date",
            "Local push notifications using AlarmManager",
            "Search and filter functionality with real-time updates",
            "Responsive and intuitive user interface built with XML"
        ],
        technicalInsights: [
            "Implemented the MVVM architecture strictly to separate business logic from UI.",
            "Utilized Room Database for thread-safe asynchronous local data storage.",
            "Designed efficient RecyclerView adapters with DiffUtil for smooth scrolling.",
            "Managed background tasks efficiently using WorkManager for reliable offline execution."
        ],
        metrics: {
            "Platform": "Android",
            "Size": "<5 MB",
            "Offline First": "100%",
            "UI Responsiveness": "<16ms"
        },
        badge: "Productivity",
        image: "/projects/project_placeholder_1.jpg", // Create or update the image path in public
        sourceFiles: "https://github.com/", // Add actual repo link later
        live: "https://play.google.com/store", // Add actual app store link or video demo
        gradient: "from-[#2B5876] to-[#4E4376]",
    },
    {
        title: "ShopEase - E-Commerce Showcase",
        description: "A fully functional e-commerce Android app prototype demonstrating complex data handling, user authentication, and fluid navigation.",
        overview: "ShopEase is designed to replicate the core experience of modern mobile shopping. It fetches product data, manages a local shopping cart, and mock-processes checkouts. The project emphasizes algorithmic problem solving, particularly in filtering large datasets (products) efficiently and maintaining a seamless user state across the app lifecycle.",
        technologies: [
            "Java",
            "REST APIs",
            "Android Studio",
            "Retrofit",
            "Glide",
            "Firebase Authentication"
        ],
        features: [
            "User authentication (Login, Register, Password Reset) via Firebase",
            "Dynamic product catalog fetched via REST APIs",
            "Complex product filtering and algorithmic sorting",
            "Functional shopping cart with local persistence",
            "Seamless image loading and caching"
        ],
        technicalInsights: [
            "Integrated Retrofit for API networking and Gson for JSON parsing.",
            "Implemented Glide for asynchronous image loading, significantly reducing memory overhead.",
            "Applied pagination to RecyclerViews to handle large datasets seamlessly.",
            "Securely managed user sessions using Firebase Authentication."
        ],
        badge: "E-Commerce",
        image: "/projects/project_placeholder_2.jpg", // Update image
        sourceFiles: "https://github.com/",
        live: "https://youtube.com/", // Add demo link
        gradient: "from-secondary to-secondary-glow"
    },
    {
        title: "WeatherSync - Real-time Weather Client",
        description: "A sleek Android weather dashboard that visualizes real-time meteorological data obtained from third-party APIs.",
        overview: "WeatherSync provides hyper-local accuracy for current weather conditions and 7-day forecasting. By combining Java's network capabilities with Android's location services, it automatically detects the user's location and requests targeted environmental data. It places a heavy emphasis on handling network anomalies gracefully and providing a polished UI.",
        technologies: [
            "Java",
            "Android SDK",
            "Location Services",
            "Volley/Retrofit",
            "OpenWeatherMap API"
        ],
        features: [
            "Real-time weather data and 7-day forecasts",
            "Automatic location detection using FusedLocationProviderClient",
            "Search for weather by custom city inputs",
            "Dynamic UI that changes based on weather conditions",
            "Graceful offline handling and cached results"
        ],
        technicalInsights: [
            "Managed precise Android runtime permissions for location access safely.",
            "Parsed complex nested JSON structures from the OpenWeatherMap API.",
            "Employed Android's SharedPreferences for saving user settings and default cities.",
            "Built custom views for dynamic weather condition backgrounds."
        ],
        image: "/projects/project_placeholder_3.jpg", // Update image
        sourceFiles: "https://github.com/",
        live: "https://youtube.com/",
        demoType: "video" as const,
        gradient: "from-primary to-primary-glow"
    }
];
