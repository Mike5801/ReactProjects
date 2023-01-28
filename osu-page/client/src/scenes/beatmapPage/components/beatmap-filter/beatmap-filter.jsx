import "./beatmap-filter.scss";
import FullFilterBlock from "./full-filter-block";

import DiscFullOutlinedIcon from '@mui/icons-material/DiscFullOutlined';
import SearchIcon from '@mui/icons-material/Search';

// const filterBlockGeneral = [
//     "Incluir mapas convertidos",
//     "Mapeadores suscritos",
//     "Mapas destacados",
//     "Artistas destacados"
// ];

const filterBlockMode = [
    "osu!",
    "osu!taiko",
    "osu!catch",
    "osu!mania"
];

const filterBlockCategories = [
    "Cualquier",
    "Clasificados",
    "Calificados",
    "Amados",
    "Favoritos",
    "Abandonados",
];

const filterBlockExplicitContent = [
    "Esconder",
    "Mostrar"
];

const BeatmapFilter = () => {
    return(
        <div className="full-filter-container">
            <div className="full-filter-title">
                <DiscFullOutlinedIcon className="beatmap-icon"/> lista de mapas
            </div>
            <div className="full-filter-filters">
                <div className="filter-search-bar">
                    <input type="text" placeholder="escriba en palabras clave..."/><SearchIcon className="search-icon"/>
                </div>
                {/* <FullFilterBlock title="General"  blocks={ filterBlockGeneral } /> */}
                <FullFilterBlock title="Modo"  blocks={ filterBlockMode } />
                <FullFilterBlock title="Categorías"  blocks={ filterBlockCategories } />
                <FullFilterBlock title="Contenido explícito"  blocks={ filterBlockExplicitContent } />
            </div>
        </div>
    )
}

export default BeatmapFilter