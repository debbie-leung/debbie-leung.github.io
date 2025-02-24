import { Hotspot } from "../components/InteractiveMap";
import { TravelType } from "../enums/TravelType";
import wallE from '../media/technical/wall-e.gif';
import ghana1 from '../media/travel/ghana_1.jpg';
import ghana2 from '../media/travel/ghana_2.jpg';
import jordan1 from '../media/travel/jordan_1.jpg';
import jordan2 from '../media/travel/jordan_2.jpg';
import jordan3 from '../media/travel/jordan_3.jpg';
import israel1 from '../media/travel/israel_1.jpg';
import israel2 from '../media/travel/israel_2.jpg';
import israel3 from '../media/travel/israel_3.jpg';
import switzerland1 from '../media/travel/switzerland_1.jpg';
import switzerland2 from '../media/travel/switzerland_2.jpg';
import switzerland3 from '../media/travel/switzerland_3.jpg';
import germany1 from '../media/travel/germany_1.jpg';
import germany2 from '../media/travel/germany_2.jpg';
import germany3 from '../media/travel/germany_3.jpg';
import stanford1 from '../media/travel/stanford_1.jpg';
import stanford2 from '../media/travel/stanford_2.jpg';
import stanford3 from '../media/travel/stanford_3.jpg';
import newyork1 from '../media/travel/newyork_1.jpg';
import newyork2 from '../media/travel/newyork_2.jpg';
import newyork3 from '../media/travel/newyork_3.jpg';
import panama1 from '../media/travel/panama_1.jpg';
import australia1 from '../media/travel/australia_1.jpg';
import australia2 from '../media/travel/australia_2.jpg';
import australia3 from '../media/travel/australia_3.jpg';
import australia4 from '../media/travel/australia_4.jpg';
import hk1 from '../media/travel/hk_1.jpg';
import hk2 from '../media/travel/hk_2.jpg';
import hk3 from '../media/travel/hk_3.jpg';
import hk4 from '../media/travel/hk_4.jpg';
import belize1 from '../media/travel/belize_1.jpg';
import belize2 from '../media/travel/belize_2.jpg';
import belize3 from '../media/travel/belize_3.jpg';
import argentina1 from '../media/travel/argentina_1.jpg';
import argentina2 from '../media/travel/argentina_2.jpg';
import argentina3 from '../media/travel/argentina_3.jpg';
import philippines1 from '../media/travel/philippines_1.jpg';
import philippines2 from '../media/travel/philippines_2.jpg';
import philippines3 from '../media/travel/philippines_3.jpg';
import philippines4 from '../media/travel/philippines_4.jpg';

// TODO: missing San Diego, France, and Vietnam?

const travelSpots: Hotspot[] = [
    { 
        country: "Argentina", 
        countryCode: "AR",
        city: "Buenos Aires",
        date: "December 2017",
        category: TravelType.FunTrip,
        latitude: -38.4161,
        longitude: -63.6167,
        description: ["Winter break trip to Buenos Aires"],
        media: [argentina1, argentina2, argentina3]
    },
    { 
        country: "Australia", 
        countryCode: "AU",
        city: "Brisbane",
        date: "February - March 2020",
        category: TravelType.Study,
        latitude: -27.4698,
        longitude: 153.0251,
        description: ["Junior Spring Study Abroad at the University of Queensland", "Tried surfing for the first time"],
        media: [australia1, australia2, australia3, australia4]
    },
    {
        country: "Belize",
        countryCode: "BZ",
        city: "Glover's Reef",
        date: "June 2021",
        category: TravelType.Diving,
        latitude: 17.189877,
        longitude: -88.49765,
        description: ["Dived at Glover's Reef Marine Reserve to conduct marine behavioral ecology field research"],
        media: [belize1, belize2, belize3]
    },
    {
        country: "Panama",
        countryCode: "PA",
        city: "Panama City",
        date: "January 2020",
        category: TravelType.Extracurricular,
        latitude: 8.9824,
        longitude: -79.5199,
        description: ["Volunteer trip to provide medical and dental services to underserved communities as part of Columbia's Global Brigades Medical chapter"],
        media: [panama1]
    },
    {
        country: "Ghana",
        countryCode: "GH",
        city: "Accra",
        date: "January 2018",
        category: TravelType.Extracurricular,
        latitude: 5.6054,
        longitude: -0.1966,
        description: ["Volunteer trip to build boreholes as part of Columbia's Engineers Without Borders Ghana chapter"],
        media: [ghana1, ghana2]
    },
    {
        country: "Jordan",
        countryCode: "JO",
        city: "Amman",
        date: "July 2018",
        category: TravelType.Study,
        latitude: 31.9552,
        longitude: 35.9453,
        description: ["Attended Columbia Earth Institute's Summer Ecosystem Experiences for Undergraduates (SEE-U) program in Jordan on Marine Ecology"],
        media: [jordan1, jordan2, jordan3]
    },
    {
        country: "Israel",
        countryCode: "IL",
        city: "Haifa",
        date: "August 2018",
        category: TravelType.Work,
        latitude: 31.7683,
        longitude: 35.2137,
        description: ["Completed a summer internship at RideOn sponsored by Columbia Israel Connection Club"],
        media: [israel1, israel2, israel3]
    },
    {
        country: "Switzerland",
        countryCode: "CH",
        city: "St. Gallen",
        date: "March 2019",
        category: TravelType.Extracurricular,
        latitude: 47.4212,
        longitude: 9.3762,
        description: ["Attended the START Summit at the University of St. Gallen as part of CORE Tech Trek"],
        media: [switzerland1, switzerland2, switzerland3]
    },
    {
        country: "Germany",
        countryCode: "DE",
        city: "Berlin",
        date: "July 2019",
        category: TravelType.Study,
        latitude: 51.1657,
        longitude: 10.4515,
        description: ["Attended Columbia Summer Core in Berlin: Art Humanities and Music Humanities"],
        media: [germany1, germany2, germany3]
    },
    {
        country: "Hong Kong",
        countryCode: "HK",
        city: "Hong Kong",
        date: "October 1998 - August 2017",
        category: TravelType.Study,
        latitude: 22.3964,
        longitude: 114.1095,
        description: ["Attended Maryknoll Convent School for primary school", "Attended Diocesan Girls' School and Li Po Chun United World College of Hong Kong for secondary school"],
        media: [hk1, hk2, hk3, hk4]
    },
    {
        country: "United States",
        countryCode: "US",
        city: "New York City",
        date: "September 2017 - September 2023",
        category: TravelType.Study,
        latitude: 40.7128,
        longitude: -74.0060,
        description: ["Attended Columbia University for Undergraduate Studies", "Worked at Dynamic Motion Control Inc. as a Systems Engineer"],
        media: [newyork1, newyork2, newyork3]
    },
    {
        country: "United States",
        countryCode: "US",
        city: "Boston",
        date: "October 2023 - February 2025",
        category: TravelType.Work,
        latitude: 42.3601,
        longitude: -71.0589,
        description: ["Worked at Dynamic Motion Control Inc. as a Systems Engineer"],
        media: [wallE]
    },
    {
        country: "Mexico",
        countryCode: "MX",
        city: "Tulum",
        date: "March 2024",
        category: TravelType.FunTrip,
        latitude: 21.2397,
        longitude: -87.4259,
        description: ["Attended a college friend's Bachelorette Party"],
        media: [wallE]
    },
    {
        country: "United States",
        countryCode: "US",
        city: "Monterey",
        date: "August 2019",
        category: TravelType.Diving,
        latitude: 36.5886,
        longitude: -121.8854,
        description: ["Conducted marine ecology research at Stanford's Hopkins Marine Station", "Dived at the Monterey Bay Aquarium Research Institute"],
        media: [stanford1, stanford2, stanford3]
    },
    {
        country: "The Philippines",
        countryCode: "PH",
        city: "Puerto Galera",
        date: "March 2016, March 2017",
        category: TravelType.Diving,
        latitude: 10.3071,
        longitude: 123.8865,
        description: ["Completed PADI Open Water Diver certification at La Laguna Beach Club & Dive Centre"],
        media: [philippines1, philippines2, philippines3, philippines4]
    }
];

export default travelSpots;
