import { Project } from "../components/Projects";
import { MediaType } from "../types/MediaType";
import { TagColor } from "../types/TagColor";
import climatePaper from '../media/climate.png';
import entoproctaWebsite from '../media/entoprocta.png';
import scmpPost from '../media/scmp.png';
import climatePaperPDF from '../media/climate_paper.pdf';

export const publications: Project[] = [
    {
        title: "Youth Activism in Climate Change Education",
        media: [climatePaper],
        mediaType: MediaType.Image,
        mediaLink: climatePaperPDF,
        tags: [
            { name: "Climate Change", color: TagColor.Topic },
        ],
        description: "Safaya, S., Rines, M.L., Leung, D.S.K., Pang, H.L.T., Yeung, Y., Gobbi, G., Asinas, C., Schaefer, E.A.; Yu, C.K.Y., Lamond, S., Juels, T., Chu, A., Fung, H.C., Chung, C.H.V., Chung, H.L.L., Yung, Z.S., Lun, H.H.M., Ng, C.Y.J. (2021). Listening to youth: how to close the knowledge-action gap in climate change education. School Science Review, vol. 103, issue 383.",
    },
    {
        title: "Species Description of Barentsiidae and Loxosomatidae Families",
        media: [entoproctaWebsite],
        mediaType: MediaType.Image,
        mediaLink: "https://www.gbri.org.au//SpeciesList//StudentProject2020%7CSinKiDebbieLeung#Section4187",
        tags: [
            { name: "Marine Zoology", color: TagColor.Topic },
        ],
        description: "Leung, Debbie (2020). Comparison and Contrast of Barentsiidae and Loxosomatidae in terms of Life History, Behavior, Anatomy, Physiology, Ecology, Systematics and Biogeographical Distribution. Invertebrates of the Coral Sea.",
    },
    {
        title: "Opinion Piece on Career Choices in Hong Kong",
        media: [scmpPost],
        mediaType: MediaType.Image,
        mediaLink: "https://www.scmp.com/comment/insight-opinion/article/2131600/hong-kong-students-dont-have-be-doctors-they-should-pursue",
        tags: [
            { name: "Higher Education", color: TagColor.Topic },
        ],
        description: "Leung, Debbie (2018). Hong Kong students don't have to be doctors -- they should pursue careers that matter to them. South China Morning Post.",
    }
]