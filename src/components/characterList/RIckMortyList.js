import RickMorty from '../character/RickMorty'
import './RickMortyList.css'

const RickMortyList = ({ addCharacterName, addCharacterLoc, addCharacterEpi }) => {
    return (addCharacterName.map((item) => (<RickMorty  addCharacterName={item} />)) 
    )
}

export default RickMortyList;