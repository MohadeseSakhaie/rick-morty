import './RickMorty.css'

const RickMortyList = ({ addCharacterName, addCharacterLoc, addCharacterEpi }) => {

    return (<div className="list">
        <div>
            <img src={require('./625.jpg')} />
            
        </div>
        <div className='f'>
            <label>name:</label><div className='name'>{addCharacterName}</div>
            <label>state:</label><div className='state'></div>

            <label>Last known location:</label><div className='last-known'>{addCharacterLoc}</div>
            <label>First seen in:</label><div className='last-seen'>{addCharacterEpi}</div>
        </div>

    </div>);
}

export default RickMortyList;
{/* //<img src={require(item.image)} /> */ }