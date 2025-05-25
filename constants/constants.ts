import OnboardingSvg1 from "../assets/images/onboard1.svg";
import OnboardingSvg2 from "../assets/images/onboard2.svg";
import OnboardingSvg3 from "../assets/images/onboard3.svg";
import OnboardingSvg4 from "../assets/images/onboard4.svg";

export const healthRegScreens = [
  "index",
  "date-of-birth",
  "weight",
  "blood-type",
  "allergies",
  "medical-conditions",
  "medications",
];

export const healthQuotes = [
  {
    id: 1,
    quote:
      "It is health that is real wealth and not pieces of gold and silver.",
    author: "Mahatma Gandhi",
  },
  {
    id: 2,
    quote: "Take care of your body. It’s the only place you have to live.",
    author: "Jim Rohn",
  },
  {
    id: 3,
    quote: "He who has health has hope, and he who has hope has everything.",
    author: "Arabian Proverb",
  },
  {
    id: 4,
    quote:
      "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.",
    author: "Buddha",
  },
  {
    id: 5,
    quote:
      "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.",
    author: "Buddha",
  },
  {
    id: 6,
    quote: "A healthy outside starts from the inside.",
    author: "Robert Urich",
  },
  {
    id: 7,
    quote: "Happiness is the highest form of health.",
    author: "Dalai Lama",
  },
  {
    id: 8,
    quote: "Your body hears everything your mind says.",
    author: "Naomi Judd",
  },
  {
    id: 9,
    quote: "The greatest wealth is health.",
    author: "Virgil",
  },
  {
    id: 10,
    quote: "Take care of your body. It’s the only place you have to live in.",
    author: "Jim Rohn",
  },
];

export const onboardingSteps = [
  {
    id: 1,
    text: "Personalize Your Mental Health State With AI",
    tag: "Step 1",
    svg: OnboardingSvg1,
    fillColor: "#CFD9B5",
    tagFillColor: "#E5EAD7",
    tagTextColor: "#7D944D",
    textColor: "#9BB068",
    textsToHighlight: ["health", "state"],
  },
  {
    id: 2,
    text: "Intelligent Mood Tracking & Emotion Insights",
    tag: "Step 2",
    svg: OnboardingSvg2,
    fillColor: "#FFD2C2",
    tagFillColor: "#FFD2C2",
    tagTextColor: "#FE814B",
    textColor: "#FE631B",
    textsToHighlight: ["intelligent"],
  },
  {
    id: 3,
    text: "Mindful Resources That Makes You Happy",
    tag: "Step 3",
    svg: OnboardingSvg3,
    fillColor: "#FFEBC2",
    tagFillColor: "#FFEBC2",
    tagTextColor: "#E0A500",
    textColor: "#FFBD1A",
    textsToHighlight: ["resources"],
  },
  {
    id: 4,
    text: "Loving & Supportive Community",
    tag: "Step 4",
    svg: OnboardingSvg4,
    fillColor: "#CBC2FF",
    tagFillColor: "#CBC2FF",
    tagTextColor: "#7152FF",
    textColor: "#7152FF",
    textsToHighlight: ["community"],
  },
];

export const oAuths = [
  {
    id: 1,
    name: "Google",
    icon: "flowbite:facebook-solid",
    onPress: () => null,
  },
  {
    id: 2,
    name: "Facebook",
    icon: "flowbite:google-solid",
    onPress: () => null,
  },
  {
    id: 3,
    name: "Apple",
    icon: "flowbite:instagram-solid",
    onPress: () => null,
  },
];
