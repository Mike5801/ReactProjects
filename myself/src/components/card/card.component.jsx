import './card.styles.css';

const Card = ({name, desc}) => {
    return (
        <div className='card-container'>
            <div className='card-title'>
                {name}
            </div>
            <div className='card-body'>
                {desc}         
            </div>
        </div>
    );
}

export default Card;