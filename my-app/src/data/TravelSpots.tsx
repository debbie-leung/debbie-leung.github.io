import { Hotspot } from "../components/InteractiveMap";
import { TravelType } from "../enums/TravelType";

const travelSpots: Hotspot[] = [
    { 
        country: "Argentina", 
        countryCode: "AR",
        city: "Buenos Aires",
        date: "December 2017",
        category: TravelType.FunTrip,
        latitude: -38.4161,
        longitude: -63.6167,
        description: ["Winter break trip to Buenos Aires"] 
    },
    { 
        country: "Australia", 
        countryCode: "AU",
        city: "Brisbane",
        date: "February - March 2020",
        category: TravelType.Study,
        latitude: -27.4698,
        longitude: 153.0251,
        description: ["Junior Spring Study Abroad at the University of Queensland", "Tried surfing for the first time"] 
    },
    {
        country: "Belize",
        countryCode: "BZ",
        city: "Glover's Reef",
        date: "June 2021",
        category: TravelType.Diving,
        latitude: 17.189877,
        longitude: -88.49765,
        description: ["Dived at Glover's Reef Marine Reserve to conduct marine behavioral ecology field research"]
    },
    {
        country: "Panama",
        countryCode: "PA",
        city: "Panama City",
        date: "January 2020",
        category: TravelType.Extracurricular,
        latitude: 8.9824,
        longitude: -79.5199,
        description: ["Volunteer trip to provide medical and dental services to underserved communities as part of Columbia's Global Brigades Medical chapter"]
    },
    {
        country: "Ghana",
        countryCode: "GH",
        city: "Accra",
        date: "January 2018",
        category: TravelType.Extracurricular,
        latitude: 5.6054,
        longitude: -0.1966,
        description: ["Volunteer trip to build boreholes as part of Columbia's Engineers Without Borders Ghana chapter"]
    },
    {
        country: "Jordan",
        countryCode: "JO",
        city: "Amman",
        date: "July 2018",
        category: TravelType.Study,
        latitude: 31.9552,
        longitude: 35.9453,
        description: ["Attended Columbia Earth Institute's Summer Ecosystem Experiences for Undergraduates (SEE-U) program in Jordan on Marine Ecology"]
    },
    {
        country: "Israel",
        countryCode: "IL",
        city: "Haifa",
        date: "August 2018",
        category: TravelType.Work,
        latitude: 31.7683,
        longitude: 35.2137,
        description: ["Completed a summer internship at RideOn sponsored by Columbia Israel Connection Club"]
    },
    {
        country: "Switzerland",
        countryCode: "CH",
        city: "St. Gallen",
        date: "March 2019",
        category: TravelType.Extracurricular,
        latitude: 47.4212,
        longitude: 9.3762,
        description: ["Attended the START Summit at the University of St. Gallen as part of CORE Tech Trek"]
    },
    {
        country: "Germany",
        countryCode: "DE",
        city: "Berlin",
        date: "July 2019",
        category: TravelType.Study,
        latitude: 51.1657,
        longitude: 10.4515,
        description: ["Attended Columbia Summer Core in Berlin: Art Humanities and Music Humanities"]
    },
    {
        country: "Hong Kong",
        countryCode: "HK",
        city: "Hong Kong",
        date: "October 1998 - August 2017",
        category: TravelType.Study,
        latitude: 22.3964,
        longitude: 114.1095,
        description: ["Attended Maryknoll Convent School for primary school", "Attended Diocesan Girls' School and Li Po Chun United World College of Hong Kong for secondary school"]
    },
    {
        country: "United States",
        countryCode: "US",
        city: "New York City",
        date: "September 2017 - September 2023",
        category: TravelType.Study,
        latitude: 40.7128,
        longitude: -74.0060,
        description: ["Attended Columbia University for Undergraduate Studies", "Worked at Dynamic Motion Control Inc. as a Systems Engineer"]
    },
    {
        country: "United States",
        countryCode: "US",
        city: "Boston",
        date: "October 2023 - February 2025",
        category: TravelType.Work,
        latitude: 42.3601,
        longitude: -71.0589,
        description: ["Worked at Dynamic Motion Control Inc. as a Systems Engineer"]
    },
    {
        country: "Mexico",
        countryCode: "MX",
        city: "Tulum",
        date: "March 2024",
        category: TravelType.FunTrip,
        latitude: 21.2397,
        longitude: -87.4259,
        description: ["Attended a college friend's Bachelorette Party"]
    },
    {
        country: "United States",
        countryCode: "US",
        city: "Monterey",
        date: "August 2019",
        category: TravelType.Diving,
        latitude: 36.5886,
        longitude: -121.8854,
        description: ["Conducted marine ecology research at Stanford's Hopkins Marine Station", "Dived at the Monterey Bay Aquarium Research Institute"]
    },
    {
        country: "The Philippines",
        countryCode: "PH",
        city: "Puerto Galera",
        date: "March 2016, March 2017",
        category: TravelType.Diving,
        latitude: 10.3071,
        longitude: 123.8865,
        description: ["Completed PADI Open Water Diver certification at La Laguna Beach Club & Dive Centre"]
    }
];

export default travelSpots;
