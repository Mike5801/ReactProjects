import './card-list.styles.css';
import Card from '../card/card.component';
import CardImg from '../card-img/card-img.component'
const CardList = ({list}) => {


    return(
        <div className='card-list'>
            {
                list.map(listElement => {
                    const {name, desc} = listElement;
                    return <Card key={`anime ${name}`} name={name} desc={desc} />
                })
            }        
        </div>
    );
}

export default CardList;