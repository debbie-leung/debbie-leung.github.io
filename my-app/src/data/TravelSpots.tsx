import { Hotspot } from "../components/InteractiveMap";
import { TravelType } from "../enums/TravelType";
const travelSpots: Hotspot[] = [
    { 
        country: "Argentina", 
        city: "Buenos Aires",
        category: TravelType.FunTrip,
        latitude: -38.4161,
        longitude: -63.6167,
        description: "Fun trip to Bueno Aires" 
    },
    { 
        country: "Australia", 
        city: "Brisbane",
        category: TravelType.Study,
        latitude: -27.4698,
        longitude: 153.0251,
        description: "Study Abroad at the University of Queensland" 
    },
    {
        country: "Belize",
        city: "Glover's Reef Research Station",
        category: TravelType.Diving,
        latitude: 17.189877,
        longitude: -88.49765,
        description: "Marine Biology Field Research"
    },
    {
        country: "Panama",
        city: "Panama City",
        category: TravelType.Extracurricular,
        latitude: 8.9824,
        longitude: -79.5199,
        description: "Global Brigades"
    },
    {
        country: "Ghana",
        city: "Accra",
        category: TravelType.Extracurricular,
        latitude: 5.6054,
        longitude: -0.1966,
        description: "Engineers Without Borders"
    },
    {
        country: "Jordan",
        city: "Amman",
        category: TravelType.Study,
        latitude: 31.9552,
        longitude: 35.9453,
        description: "Study Abroad"
    },
    {
        country: "Israel",
        city: "Haifa",
        category: TravelType.Work,
        latitude: 31.7683,
        longitude: 35.2137,
        description: "Internship Abroad"
    },
    {
        country: "Switzerland",
        city: "Zurich",
        category: TravelType.Extracurricular,
        latitude: 46.8182,
        longitude: 8.2275,
        description: "Entrepreneurship Conference"
    },
    {
        country: "Germany",
        city: "Berlin",
        category: TravelType.Study,
        latitude: 51.1657,
        longitude: 10.4515,
        description: "Study Abroad"
    },
    {
        country: "Hong Kong",
        city: "Hong Kong",
        category: TravelType.Study,
        latitude: 22.3964,
        longitude: 114.1095,
        description: "Where I Grew Up"
    },
    {
        country: "United States",
        city: "New York City",
        category: TravelType.Study,
        latitude: 40.7128,
        longitude: -74.0060,
        description: "Undergraduate Studies"
    },
    {
        country: "United States",
        city: "Boston",
        category: TravelType.Work,
        latitude: 42.3601,
        longitude: -71.0589,
        description: "Systems Engineer"
    },
    {
        country: "Mexico",
        city: "Tulum",
        category: TravelType.FunTrip,
        latitude: 21.2397,
        longitude: -87.4259,
        description: "Fun Trip"
    }  
];

export default travelSpots;