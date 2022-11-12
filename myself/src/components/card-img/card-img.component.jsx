import './card-img.styles.css';

const CardImg = () => {
    return (
        <div className='card-img-container'>
            <img src="https://definicion.de/wp-content/uploads/2009/12/paisaje-1.jpg" alt="" />
            <div className='card-img-title'>
                This is the Card Title!
            </div>
        </div>
    );
}

export default CardImg;