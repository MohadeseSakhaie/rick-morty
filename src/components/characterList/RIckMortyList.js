import RickMorty from '../character/RickMorty'
import './RickMortyList.css'

const RickMortyList = ({ addCharacterName }) => {

    return (
        <div>
            {addCharacterName.map((item) => < RickMorty addCharacterName={item}/>)}
        </div>
    )
}

export default RickMortyList;
