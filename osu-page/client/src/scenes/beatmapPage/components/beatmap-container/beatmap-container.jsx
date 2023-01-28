import BeatmapCard from "../beatmap-card/beatmap-card";
import "./beatmap-container.scss"

import AppsIcon from '@mui/icons-material/Apps';
import WindowIcon from '@mui/icons-material/Window';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const beatmaps = [
    {
        title: "Monochrome Anomaly",
        artist: "Feryquitous Vo.F9",
        mapper: "captin1",
        imageUrl: "https://pbs.twimg.com/media/EVec1sZU4AAVCPz?format=jpg&name=large",
        loved: 5,
        timesPlayed: 300,
        datePublished: "27/01/23",
        status: "Clasificado"
    },
    {
        title: "Colorful",
        artist: "Mili",
        mapper: "- Ex -",
        imageUrl: "https://64.media.tumblr.com/e4b77ad75d2f829a0a6c566c2aa3fe07/6245c02433b5c5d1-79/s1280x1920/93390256d4c6c5346fd841a359b447e0153d56c4.jpg",
        loved: 40,
        timesPlayed: 900,
        datePublished: "24/01/23",
        status: "Clasificado"
    },
    {
        title: "Harumodoki",
        artist: "yanaginagi",
        mapper: "lapp",
        imageUrl: "https://i1.sndcdn.com/artworks-000191653423-eyyixo-t500x500.jpg",
        loved: 100,
        timesPlayed: 589,
        datePublished: "20/01/23",
        status: "Clasificado"
    }
]

const BeatmapContainer = () => {
    return(
        <div className="beatmap-container">
            <div className="beatmap-filter">
                <div className="beatmap-filter-options">
                    Ordenar Por
                    <div className="filter-option">
                        Título <ArrowDropDownIcon className="dropdown-icon" />
                    </div>
                    <div className="filter-option">
                        Artista <ArrowDropDownIcon className="dropdown-icon" />
                    </div>
                    <div className="filter-option">
                        Dificultad <ArrowDropDownIcon className="dropdown-icon" />
                    </div>
                    <div className="filter-option">
                        Tiempo clasificado <ArrowDropDownIcon className="dropdown-icon" />
                    </div>
                    <div className="filter-option">
                        Veces jugado <ArrowDropDownIcon className="dropdown-icon" />
                    </div>
                </div>
                <div className="beatmap-filter-icons">
                    <AppsIcon className="display-filter-icon"/>
                    <WindowIcon className="display-filter-icon"/>
                </div>
            </div>
            <div className="beatmap-list">
                { beatmaps.map(({ title, artist, mapper, imageUrl, loved, timesPlayed, datePublished, status }) => (
                    <BeatmapCard 
                        title={ title } 
                        artist={ artist }
                        mapper={ mapper }
                        imageUrl={ imageUrl }
                        loved={ loved }
                        timesPlayed={ timesPlayed }
                        datePublished={ datePublished }
                        status={ status }
                    />
                ))}
            </div>
        </div>
    )
}

export default BeatmapContainer;