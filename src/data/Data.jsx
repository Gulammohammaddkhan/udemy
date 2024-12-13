export const HomePageData = {
  header: {
    logo: (
      <svg
        viewBox="0 0 91 34"
        fill="none"
        className="size-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.05 8.112L7.024 4.056 0 8.112V4.056L7.025 0l7.026 4.056v4.056h-.001z"
          fill="#A435F0"
        />
        <path
          d="M0 11.518h3.68v8.941c0 2.31 1.725 3.436 3.345 3.436 1.634 0 3.346-1.156 3.346-3.467v-8.91h3.68v9.154c0 2.128-.669 3.77-2.007 4.896-1.339 1.125-3.011 1.673-5.05 1.673-2.037 0-3.71-.547-5.017-1.673C.669 24.443 0 22.862 0 20.763v-9.245zM45.866 22.63c-1.114.992-2.383 1.478-3.83 1.478-2.64 0-4.41-1.504-4.61-3.833h11.89s.08-.752.08-1.458c0-2.19-.7-4.015-2.13-5.505-1.398-1.49-3.222-2.22-5.443-2.22-2.341 0-4.258.73-5.779 2.22-1.49 1.49-2.25 3.436-2.25 5.87v.12c0 2.403.76 4.319 2.25 5.749 1.49 1.429 3.467 2.159 5.87 2.159 2.794 0 5.017-1.102 6.685-3.002l-2.733-1.578zm-6.994-7.463c.82-.639 1.825-.973 2.95-.973 1.064 0 1.946.334 2.707 1.004.726.61 1.118 1.359 1.152 2.22H37.52c.118-.89.568-1.64 1.353-2.25zM82.91 29.276C81.417 32.801 79.855 34 77.46 34H75.8v-3.262h1.342c.824 0 1.59-.31 2.32-1.994l.73-1.686-6.296-15.54h3.741l4.471 11.192 4.593-11.192h3.74l-7.53 17.758zM28.377 5.649v7.257c-1.206-1.08-3.082-1.723-4.896-1.723-2.16 0-3.984.76-5.474 2.31-1.46 1.521-2.19 3.406-2.19 5.687 0 2.282.73 4.167 2.19 5.718 1.49 1.521 3.315 2.282 5.474 2.282 2.49 0 4.064-.979 4.896-1.746v1.411h3.65V5.65h-3.65zm-1.095 16.878c-.882.882-2.007 1.339-3.315 1.339-1.308 0-2.372-.457-3.254-1.339-.85-.882-1.277-2.007-1.277-3.345 0-1.339.426-2.464 1.277-3.346.882-.882 1.946-1.338 3.254-1.338s2.433.456 3.315 1.338c.912.882 1.37 2.007 1.37 3.346 0 1.338-.458 2.463-1.37 3.345zM68.222 11.214c-2.772 0-4.213 1.15-5.2 2.258-.395-.753-1.507-2.258-4.105-2.258-2.196 0-3.49 1.11-4.136 1.9V11.52h-3.618v15.327h3.618v-8.82c0-2.068 1.278-3.558 2.98-3.558 1.735 0 2.738 1.308 2.738 3.406v8.971h3.619v-8.82c0-2.098 1.246-3.558 3.04-3.558 1.734 0 2.737 1.308 2.737 3.405v8.972h3.65v-9.488c0-3.996-2.148-6.142-5.323-6.142z"
          fill="#000"
        />
      </svg>
    ),
    input: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    ),
    links: [
      {
        name: "Explore",
        url: "/explore",
      },
      {
        name: "Plans & Pricing",
        url: "/pricing",
      },
      {
        name: "Udemy Business",
        url: "/business",
      },
      {
        name: "Teach on Udemy",
        url: "/teach",
      },
      {
        name: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        ),
        url: "/cart",
      },
    ],
    menu: {
      title: "Browse Certifications",
      categories: [
        {
          name: "Certification preparation",
          url: "/certifications",
          subcategories: [
            "Web Development",
            "Data Science",
            "Mobile Development",
            "Programming Languages",
            "Game Development",
            "Database Design & Development",
            "Software Testing",
            "Software Engineering",
            "Software Development Tools",
            "No-Code Development",
          ],
        },
        {
          name: "Development",
          url: "/development",
          subcategories: [
            "Web Development",
            "Data Science",
            "Mobile Development",
            "Programming Languages",
            "Game Development",
            "Database Design & Development",
            "Software Testing",
            "Software Engineering",
            "Software Development Tools",
            "No-Code Development",
          ],
        },
        {
          name: "Business",
          url: "/business",
          subcategories: [
            "Web Development",
            "Data Science",
            "Mobile Development",
            "Programming Languages",
            "Game Development",
            "Database Design & Development",
            "Software Testing",
            "Software Engineering",
            "Software Development Tools",
            "No-Code Development",
          ],
        },
        {
          name: "Finance & Accounting",
          url: "/finance-accounting",
          subcategories: [
            "Web Development",
            "Data Science",
            "Mobile Development",
            "Programming Languages",
            "Game Development",
            "Database Design & Development",
            "Software Testing",
            "Software Engineering",
            "Software Development Tools",
            "No-Code Development",
          ],
        },
        {
          name: "IT & Software",
          url: "/it-software",
          subcategories: [
            "Web Development",
            "Data Science",
            "Mobile Development",
            "Programming Languages",
            "Game Development",
            "Database Design & Development",
            "Software Testing",
            "Software Engineering",
            "Software Development Tools",
            "No-Code Development",
          ],
        },
        {
          name: "Office Productivity",
          url: "/office-productivity",
          subcategories: [
            "Web Development",
            "Data Science",
            "Mobile Development",
            "Programming Languages",
            "Game Development",
            "Database Design & Development",
            "Software Testing",
            "Software Engineering",
            "Software Development Tools",
            "No-Code Development",
          ],
        },
        {
          name: "Personal Development",
          url: "/personal-development",
          subcategories: [
            "Web Development",
            "Data Science",
            "Mobile Development",
            "Programming Languages",
            "Game Development",
            "Database Design & Development",
            "Software Testing",
            "Software Engineering",
            "Software Development Tools",
            "No-Code Development",
          ],
        },
        {
          name: "Design",
          url: "/design",
          subcategories: [
            "Web Development",
            "Data Science",
            "Mobile Development",
            "Programming Languages",
            "Game Development",
            "Database Design & Development",
            "Software Testing",
            "Software Engineering",
            "Software Development Tools",
            "No-Code Development",
          ],
        },
        {
          name: "Marketing",
          url: "/marketing",
          subcategories: [
            "Web Development",
            "Data Science",
            "Mobile Development",
            "Programming Languages",
            "Game Development",
            "Database Design & Development",
            "Software Testing",
            "Software Engineering",
            "Software Development Tools",
            "No-Code Development",
          ],
        },
        {
          name: "Lifestyle",
          url: "/lifestyle",
          subcategories: [
            "Web Development",
            "Data Science",
            "Mobile Development",
            "Programming Languages",
            "Game Development",
            "Database Design & Development",
            "Software Testing",
            "Software Engineering",
            "Software Development Tools",
            "No-Code Development",
          ],
        },
        {
          name: "Photography & Video",
          url: "/photography-video",
          subcategories: [
            "Web Development",
            "Data Science",
            "Mobile Development",
            "Programming Languages",
            "Game Development",
            "Database Design & Development",
            "Software Testing",
            "Software Engineering",
            "Software Development Tools",
            "No-Code Development",
          ],
        },
        {
          name: "Health & Fitness",
          url: "/health-fitness",
          subcategories: [
            "Web Development",
            "Data Science",
            "Mobile Development",
            "Programming Languages",
            "Game Development",
            "Database Design & Development",
            "Software Testing",
            "Software Engineering",
            "Software Development Tools",
            "No-Code Development",
          ],
        },
        {
          name: "Music",
          url: "/music",
          subcategories: [
            "Web Development",
            "Data Science",
            "Mobile Development",
            "Programming Languages",
            "Game Development",
            "Database Design & Development",
            "Software Testing",
            "Software Engineering",
            "Software Development Tools",
            "No-Code Development",
          ],
        },
        {
          name: "Teaching & Academics",
          url: "/teaching-academics",
          subcategories: [
            "Web Development",
            "Data Science",
            "Mobile Development",
            "Programming Languages",
            "Game Development",
            "Database Design & Development",
            "Software Testing",
            "Software Engineering",
            "Software Development Tools",
            "No-Code Development",
          ],
        },
      ],
      popularTopics: [
        "JavaScript",
        "React JS",
        "Angular",
        "CSS",
        "Next.js",
        "HTML",
        "Node.js",
        "ASP.NET Core",
      ],
    },
    userOptions: [
      {
        name: "Log in",
        url: "/login",
      },
      {
        name: "Sign up",
        url: "/signup",
      },
    ],
    languageSelector: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
      ),
      options: ["English", "Español", "Français", "Deutsch", "中文"],
    },
  },
  sliderbanner: [
    {
      heading: "Learning that gets you",
      description:
        "Skills for your present (and your future). Get started with us..",
    },
    {
      heading: "Skills that drive you forward",
      description:
        "Technology and the world of work change fast — with us, you’re faster. Get the skills to achieve goals and stay competitive.",
    },
  ],
  courseList: {
    heading: "All the skills you need in one place",
    desc: "From critical skills to technical topics, Udemy supports your professional development.",
    tabsData: [
      {
        name: "Data Science",
        topics: [
          {
            name: "ChatGPT",
            totalLearners: "3M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Ai Powered Guide",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Masterclass",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT & Gemini",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT For Data Science",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Mastering SEO With ChatGpt",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Data Science",
            totalLearners: "7M",
            courses: [
              {
                name: "Data Science Course",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Python For Data Science",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "R Programming A-Z",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Data Science A-Z",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Data Science Machine Learning",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Complete A.I & Machine Learning",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Python",
            totalLearners: "46.6M",
            courses: [
              {
                name: "Complete Python Bootcamp",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "100 days of Code",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Automate the Boring Stuff",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Python For Data Science",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Master Programming",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Python Programming",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Machine Learning",
            totalLearners: "8M",
            courses: [
              {
                name: "Machine Learning A-Z",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Machine Learning Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Machine Learning Python",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Machine Learning & Deep Learning",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Complete Machine Learning Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Machine Learning with R Studio",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Deep Learning",
            totalLearners: "2M",
            courses: [
              {
                name: "Deep Learning Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Deep Learning A-Z",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Python Deep Learning",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Tensorflow 2.0 Deep Learning",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Data Science : Deep Learning",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Advanced AI Deep Reinforcement",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Artificial Intellengence (AI)",
            totalLearners: "3M",
            courses: [
              {
                name: "Artificial Intellengence (AI) Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Artificial Intellengence (AI) A-Z",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Artificial Intellengence (AI) Reinforcement",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Beginner Guide Artificial Intellengence (AI)",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Artificial Intellengence (AI) Modern",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Anyword Ai",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Statistics",
            totalLearners: "1M",
            courses: [
              {
                name: "Statistics Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Statistics for Data Science",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Probablity & Statistics",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Statistics for Business Analytics",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Statistics & Hypothesis Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Statistics A-Z",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Natural Language Processing (NLP)",
            totalLearners: "791200",
            courses: [
              {
                name: "Natural Language Processing (NLP) Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Natural Language Processing (NLP) A-Z",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Natural Language Processing (NLP) Modern",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Natural Language Processing (NLP) Python",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Natural Language Processing (NLP) & Deep Learning",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Natural Language Processing (NLP) Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
        ],
      },
      {
        name: "IT Certifications",
        topics: [
          {
            name: "Amazon AWS",
            totalLearners: "4M",
            courses: [
              {
                name: "Amazon AWS Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Amazon AWS A-Z",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Amazon AWS Cloud",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Amazon AWS Certifications Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Amazon AWS Cloud Practitioner",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Amazon AWS API's",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "AWS Certified Cloud Practitioner",
            totalLearners: "2M",
            courses: [
              {
                name: "AWS Certified Cloud Practitioner Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "AWS Certified Cloud Practitioner Exam Training",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "AWS Certified Cloud Practitioner 2024",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "AWS Certified Cloud Practitioner Certifications",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "AZ-900: Microsoft Azure Fundamentals",
            totalLearners: "1M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "AWS Certified Solutions Architect - Associate",
            totalLearners: "3M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Kubernetes",
            totalLearners: "1M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "AWS Certified Developer - Associate",
            totalLearners: "1M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Cisco Certified Network Associate (CCNA)",
            totalLearners: "3M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "CompTIA Security+",
            totalLearners: "1M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
        ],
      },
      {
        name: "Leadership",
        topics: [
          {
            name: "Leadership",
            totalLearners: "2M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Management Skills",
            totalLearners: "1M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Project Management",
            totalLearners: "3M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Personal Productivity",
            totalLearners: "2M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Emotional Intelligence",
            totalLearners: "987,000",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Digital Transformation",
            totalLearners: "356,900",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Business Strategy",
            totalLearners: "1M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Conflict Management",
            totalLearners: "243,600",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
        ],
      },
      {
        name: "Web Development",
        topics: [
          {
            name: "Web Development",
            totalLearners: "13.3M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "JavaScript",
            totalLearners: "17.7M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "React JS",
            totalLearners: "8M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Angular",
            totalLearners: "4M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Java",
            totalLearners: "15.5M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Android Development",
            totalLearners: "8M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "iOS Development",
            totalLearners: "4M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "CSS",
            totalLearners: "9M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
        ],
      },
      {
        name: "Communication",
        topics: [
          {
            name: "Communication Skills",
            totalLearners: "2M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Presentation Skills",
            totalLearners: "1M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Public Speaking",
            totalLearners: "3M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Writing",
            totalLearners: "1M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "PowerPoint",
            totalLearners: "2M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Business Communication",
            totalLearners: "396,300",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Business Writing",
            totalLearners: "278,700",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
        ],
      },
      {
        name: "Business Analytics & Intelligence",
        topics: [
          {
            name: "Microsoft Excel",
            totalLearners: "18.8M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "SQL",
            totalLearners: "8M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Microsoft Power BI",
            totalLearners: "4M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Data Analysis",
            totalLearners: "3M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Business Analysis",
            totalLearners: "1M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Tableau",
            totalLearners: "1M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Data Visualization",
            totalLearners: "1M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Data Modeling",
            totalLearners: "555,600",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
        ],
      },
    ],
  },
};
