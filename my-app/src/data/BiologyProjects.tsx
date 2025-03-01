import { Project } from "../components/Projects";
import { TagCategory } from "../enums/TagCategory";
import { MediaType } from "../enums/MediaType";
import belizePowerpoint from '../media/biology/belize.png';
import thesisPoster from '../media/biology/thesis.png';
import finalThesisPDF from '../media/biology/final_thesis.pdf';
import hopkinsPoster from '../media/biology/hopkins_poster.png';
import bendeskyPowerpoint from '../media/biology/bendesky.png';
import bendeskyPresentation from '../media/biology/bendesky_presentation.pdf';

export const biologyProjects: Project[] = [
    {
        title: "Functional and Genetic Regulation of Thermal Stress in Intertidal Mussels",
        media: [thesisPoster],
        mediaType: MediaType.Image,
        mediaLink: finalThesisPDF,
        tags: [
            { name: "RNA Sequencing", category: TagCategory.Tool },
            { name: "R", category: TagCategory.Technology },
            { name: "HPC", category: TagCategory.Technology },
            { name: "Molecular Ecology", category: TagCategory.Topic },
        ],
        description: "Conducted funded senior thesis that investigates the physiological and molecular mechanisms of thermal regulation in mussels. Undertook heat ramping experiments to measure physiological variables and perform RNA sequencing. Analyzed physiological data using R and performed bioinformatics on gene expression profiles using high performance computing.",
    },
    {
        title: "Genetic Basis of Red and Blue Coloration in Betta Splendens",
        media: [bendeskyPowerpoint],
        mediaType: MediaType.Image,
        mediaLink: bendeskyPresentation,
        tags: [
            { name: "DNA Extraction", category: TagCategory.Tool },
            { name: "Matlab", category: TagCategory.Technology },
            { name: "Genetics", category: TagCategory.Topic },
        ],
        description: "Assisted with data collection of category phenotypes and genomes of the Siamese fighting fish to study the consequences of domestication by taking fin-clips and photos from live fish, managing the fish database, setting up lab-based behavioral assays, performing tissue preparation, next-generation sequencing and in-situ hybridization. Carried out image analysis on fin morphology of Betta Splendens using ImageJ and Matlab.",
    },
    {
        title: "Cobbling Together Biodiversity Patterns within Kelp Forest Ecosystems",
        media: [hopkinsPoster],
        mediaType: MediaType.Image,
        tags: [
            { name: "DNA Extraction", category: TagCategory.Tool },
            { name: "Linux", category: TagCategory.Technology },
            { name: "Molecular Ecology", category: TagCategory.Topic },
        ],
        description: "Performed DNA metabarcoding on cobbles covered with crustose coralline algae by carrying out molecular lab work including DNA extraction, PCR, library preparation and bioinformatic analysis of DNA sequencing FASTQ files using Linux, Python, R and BLAST to characterize the biodiversity of kelp forests along the Californian coast.",
    },
    {
        title: "Ecological Drivers of Group-Living in Sponge-Dwelling Elacatinus Lori Gobies",
        media: [belizePowerpoint],
        mediaType: MediaType.Image,
        tags: [
            { name: "Underwater Visual Census", category: TagCategory.Tool },
            { name: "MeshLab", category: TagCategory.Technology },
            { name: "Behavioral Ecology", category: TagCategory.Topic },
        ],
        description: "Received funding to assist in marine field expedition to Glover's Reef Research Station in Belize to study the social structure of Elacatinus lori. Designed and assembled aquarium, performed animal care, conducted underwater visual census of E. lori distribution in tubular sponges, sexed and tagged fish, devised and assisted in field experiments.",
    }
]