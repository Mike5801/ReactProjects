import BeatmapContainer from "./components/beatmap-container/beatmap-container";
import BeatmapFilter from "./components/beatmap-filter/beatmap-filter"
import "./index.scss"

const BeatmapPage = () => {
    return(
        <div className="beatmap-page-container">
            <BeatmapFilter />
            <BeatmapContainer />
        </div>
    )
}

export default BeatmapPage;