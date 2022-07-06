import './RickMorty.css'

const RickMorty = ({ addCharacterName}) => {

    return (<div className="list">
        <div>
            <img src={`${addCharacterName.image}`} />
        </div>
        <div className='f'>
            <label>name:</label><div className='name'>{addCharacterName.name}</div>
            <label>state:</label><div className='state'>{addCharacterName.status}</div>
            <label>Last known location:</label><div className='last-known'>{addCharacterName.location.name}</div>
            <label>First seen in:</label><a href={`${addCharacterName.episode[0]}`}>{addCharacterName.episode[0]}</a>
        </div>

    </div>);
}

export default RickMorty;
{/* <div className='first-seen'></div> */}