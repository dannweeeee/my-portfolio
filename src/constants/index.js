import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    figma,
    solidity,
    python,
    cprogram,
    cplusplus,
    threejs,
    sql,
    ipfs,
    ey,
    elastos,
    saf,
    adactiveasia,
    wildchain,
    metacord,
    notaite,
    foodie,
    defistablecoin,
    threads,
    dynamicnfts,
    ey_testi,
    adactiveasia_testi,
    sagacious,
    blockchainatntu
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Engineer",
      icon: web,
    },
    {
      title: "Full Stack Developer",
      icon: creator,
    },
    {
      title: "Web3 Builder",
      icon: backend,
    },
    {
      title: "Content Writer",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "CProgramming",
      icon: cprogram,
    },
    {
      name: "C++",
      icon: cplusplus,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "solidity",
      icon: solidity,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "sql",
      icon: sql,
    },
    {
      name: "ipfs",
      icon: ipfs,
    },
  ];
  
  const experiences = [
    {
      title: "Information Technology Development Intern",
      company_name: "Ernst & Young | APAC FinTech",
      icon: ey,
      iconBg: "#818589",
      date: "March 2018 - August 2018",
      points: [
        "I was part of the Core Business Services (APAC FinTech) Team in Ernst & Young that bridges the gap of startups and investors in the FinTech ecosystem.",
        "We conceptualised and launched the EY FinTech Hub Website, a digital marketplace for financial institutions to discover and procure solutions in multiple domains of FinTech.",
        "The EY FinTech Hub Website used HTML, CSS, and JavaScript to create a responsive mock website (before EY KYC) that was compatible with all devices."
      ],
    },
    {
      title: "Community Manager",
      company_name: "Elastos | Web3",
      icon: elastos,
      iconBg: "#818589",
      date: "August 2018 - October 2018",
      points: [
        "I was part of the Elastos Singapore Community Team.",
        "Created a Telegram communication channel with over 45 members.",
        "Co-organised an Elastos event held in SMU Singapore with over 80 participants.",
        "The event's goal was to attract Web3 Builders to develop dApps on the Elastos Blockchain Network."
      ],
    },
    {
      title: "Lieutenant",
      company_name: "Singapore Armed Forces | Army",
      icon: saf,
      iconBg: "#818589",
      date: "September 2020 - August 2021",
      points: [
        "I was part of the Singapore Armed Forces (SAF) as an Infantry Lieutenant in the Singapore Army.",
        "Posted to Officer Cader School as a Platoon Instructor to train and develop future SAF Officers.",
        "Administered meaningful, effective, and safe trainings for 300 trainees throughout my service.",
        "Regulated the Covid-19 operational plan during the pandemic to ensure the safety of all personnel.",
        "Participated in Singapore National Day Parade 2021 as the SAFTI Ensign, Colours Party.",
      ],
    },
    {
      title: "Community Development Intern",
      company_name: "Adactive Asia | Web3",
      icon: adactiveasia,
      iconBg: "#818589",
      date: "May 2022 - August 2022",
      points: [
        "I was part of the Web3 Marketing Team of Adactive Asia that was in charge of managing the Wanderverse community on Facebook, Twitter/X, Instagram, Discord and Telegram Channels.",
        "Wanderverse was a Web3 network-building application that is built on the Polygon Blockchain Network.",
        "We worked closely with Polygon Technology to churn out marketing collaterals for the launch of Wanderverse.",
        "Refined multiple essential investor decks and marketing decks to attract more investors and merchant partnerships.",
        "Conducted intensive research in Web3 Development, Smart Contracts and Tokenomics.",
        "Constructed an informative website using HTML, CSS and Javascript",
      ],
    },
    {
      title: "Full Stack Web3 Developer Intern",
      company_name: "Wildchain | Web3",
      icon: wildchain,
      iconBg: "#E6DEDD",
      date: "July 2023 - Present",
      points: [
        "I am currently still working as a Web3 Developer Intern in Wildchain.",
        "Part of the Web3 Development Team of Wildchain that is in charge of developing Wildchain's Web3 Infrastructure",
        "Currently working on the Wildchain's Multichain Dynamic NFT Marketplace that is built on the Celo Blockchain Network",
        "Prior to this, I worked on the smart contracts for Wildchain's DAO Governance that is in charge of managing the Wildfund Treasury",
        "I also research and document on Web3 Development Ideas and Concepts to improve the Wildchain's Web3 Infrastructure",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Dann is a talented, well-spoken and inquisitive individual. He is willing to try out new tools and is adaptive to change.",
      name: "Varun Mittal",
      designation: "FinTech Leader",
      company: "Ernst & Young",
      image: ey_testi,
    },
    {
      testimonial:
        "Dann consistently demonstrated a strong work ethic, a proactive attitude, and a genuine passion for the Web3 industry. ",
      name: "Teo Yu Hang",
      designation: "CEO",
      company: "Adactive Asia",
      image: adactiveasia_testi,
    },
  ];
  
  const projects = [
    {
      name: "Metacord",
      description:
        "A Full Stack Instant Messaging and VoIP Social Platform Powered By React | NextJS 13 | TypeScript | Socket.io | Prisma | MySQL",
        tags: [
          {
            name: "ReactJS",
            color: "blue-text-gradient",
          },
          {
            name: "NextJS",
            color: "green-text-gradient",
          },
          {
            name: "TypeScript",
            color: "pink-text-gradient",
          },
          {
            name: "Socket.io",
            color: "yellow-text-gradient",
          },
          {
            name: "Prisma",
            color: "orange-text-gradient",
          },
          {
            name: "MySQL",
            color: "purple-text-gradient",
          },
        ],
        image: metacord,
        source_code_link: "https://github.com/dannweeeee/metacord",
        website_link: "https://metacord.up.railway.app/",
    },
    {
      name: "NotAIte",
      description:
        "A Full Stack AI Note-Taking Tool Powered By React | NextJS 13 | DALL-E | DrizzleORM | OpenAI | TypeScript | Firebase",
        tags: [
          {
            name: "ReactJS",
            color: "blue-text-gradient",
          },
          {
            name: "NextJS",
            color: "green-text-gradient",
          },
          {
            name: "TypeScript",
            color: "pink-text-gradient",
          },
          {
            name: "Firebase",
            color: "yellow-text-gradient",
          },
          {
            name: "DrizzleORM",
            color: "orange-text-gradient",
          },
          {
            name: "OpenAI",
            color: "purple-text-gradient",
          },
        ],
        image: notaite,
        source_code_link: "https://github.com/dannweeeee/notaite",
        website_link: "https://notaite-by-dann.vercel.app/",
    },
    {
      name: "Foodie",
      description:
        "A Full Stack Location-Based Tool Powered By React | NextJS 13 | Google Maps API | TailwindCSS | NextAuth",
        tags: [
          {
            name: "ReactJS",
            color: "blue-text-gradient",
          },
          {
            name: "NextJS",
            color: "green-text-gradient",
          },
          {
            name: "JavaScript",
            color: "pink-text-gradient",
          },
          {
            name: "Google Maps API",
            color: "yellow-text-gradient",
          },
          {
            name: "TailwindCSS",
            color: "orange-text-gradient",
          },
          {
            name: "NextAuth",
            color: "purple-text-gradient",
          },
        ],
        image: foodie,
        source_code_link: "https://github.com/dannweeeee/foodie",
        website_link: "https://foodie-by-dann.vercel.app/",
    },
    {
      name: "DeFi Stablecoin",
      description:
        "A Foundry DeFi Stablecoin Project (Pegged && Algorithmic && Exogenous) - Deployed on Sepolia Testnet",
      tags: [
        {
          name: "Solidity",
          color: "blue-text-gradient",
        },
        {
          name: "Foundry",
          color: "green-text-gradient",
        },
        {
          name: "Stablecoin",
          color: "pink-text-gradient",
        },
        {
          name: "Fuzz-Testing",
          color: "yellow-text-gradient",
        },
        {
          name: "Chainlink",
          color: "orange-text-gradient",
        },
      ],
      image: defistablecoin,
      source_code_link: "https://github.com/dannweeeee/foundry-defi-stablecoin-f23",
      website_link: "https://sepolia.etherscan.io/address/0x6b09db0dfc4c45f731a6dff1487bc495b026385c#code",
    },
    {
      name: "Threads Clone",
      description:
        "A Full Stack MERN Next.JS 13 Threads Clone Web Application Powered By React | NextJS 13 | TypeScript | MongoDB",
        tags: [
          {
            name: "ReactJS",
            color: "blue-text-gradient",
          },
          {
            name: "NextJS",
            color: "green-text-gradient",
          },
          {
            name: "TypeScript",
            color: "pink-text-gradient",
          },
          {
            name: "TailwindCSS",
            color: "yellow-text-gradient",
          },
          {
            name: "MongoDB",
            color: "orange-text-gradient",
          },
        ],
        image: threads,
        source_code_link: "https://github.com/dannweeeee/threads",
        website_link: "https://threads-by-dann.vercel.app/",
    },
    {
      name: "Dynamic NFTs",
      description:
        "A Foundry ERC721 NFT Project - Created Dynamic SVG NFTs && IPFS Hosted PNG NFT - Deployed on Sepolia Testnet",
        tags: [
          {
            name: "Solidity",
            color: "blue-text-gradient",
          },
          {
            name: "Foundry",
            color: "green-text-gradient",
          },
          {
            name: "NFT",
            color: "pink-text-gradient",
          },
          {
            name: "ERC721",
            color: "yellow-text-gradient",
          },
          {
            name: "SVG",
            color: "orange-text-gradient",
          },
          {
            name: "IPFS",
            color: "purple-text-gradient",
          },
        ],
        image: dynamicnfts,
        source_code_link: "https://github.com/dannweeeee/foundry-nft-f23",
        website_link: "https://sepolia.etherscan.io/address/0x3c71c7fe7bf493aa4ad402e047301eaec5f89d2a",
    },
  ];

  const newsletters = [
    {
      name: "Sagacious by Dann",
      description:
        "Launched a Personal Newsletter that delves into topics ranging from Blockchain Protocols and Software Development to the latest developments in Tech",
      tags: [
        {
          name: "Blockchain",
          color: "blue-text-gradient",
        },
        {
          name: "Cryptocurrency",
          color: "green-text-gradient",
        },
        {
          name: "Web3",
          color: "pink-text-gradient",
        },
      ],
      image: sagacious,
      website_link: "https://paragraph.xyz/@dannweeeee",
    },
    {
      name: "Blockchain at NTU",
      description:
        "Kickstarted a Blockchain at NTU Newsletter that delves into topics ranging from Blockchain 101 and DeFi Protocols to the latest developments in Web3",
        tags: [
          {
            name: "Blockchain101",
            color: "blue-text-gradient",
          },
          {
            name: "DeFi",
            color: "green-text-gradient",
          },
          {
            name: "News",
            color: "pink-text-gradient",
          },
        ],
        image: blockchainatntu,
        website_link: "https://paragraph.xyz/@ntublockchain",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, newsletters };