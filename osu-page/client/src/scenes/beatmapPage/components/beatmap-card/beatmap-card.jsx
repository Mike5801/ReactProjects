import "./beatmap-card.scss";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DownloadIcon from '@mui/icons-material/Download';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const BeatmapCard = ({ title, artist, mapper, imageUrl, loved, timesPlayed, datePublished, status }) => {
    return(
        <div className="beatmap-card">
            <div className="beatmap-image">
                <img src={ imageUrl } alt= { title } />
                <PlayArrowIcon className="beatmap-play-icon"/>
            </div>
            <div className="beatmap-detail"
                style={{ backgroundImage: `linear-gradient(rgba(86,88,88,0.8), rgba(86,88,88,.8)), url(${imageUrl})`}}
            >
                <div className="beatmap-title">{ title }</div>
                <div className="beatmap-artist">por { artist }</div>
                <div className="beatmap-mapper">
                    mapeado por <span className="beatmap-mapper-name"> { mapper }</span>
                </div>
                <div className="beatmap-statistics">
                    .
                </div>
                <div className="beatmap-extra-info">
                    <div className="status">{ status }</div>
                    <div className="difficulties"></div>
                </div>
            </div>
            <div className="beatmap-actions">
                <FavoriteBorderIcon className="beatmap-action-icon"/>
                <DownloadIcon className="beatmap-action-icon"/>
            </div>
        </div>
    )
}

export default BeatmapCard;