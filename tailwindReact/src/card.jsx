import CardPic from './assets/chritmas2.jpg';
function Card(){
    return(
        <>
        <div className='card'>
            <img src={CardPic}></img>
            <h3>Merry Christmas</h3>
            <p>We wish you a joyful holiday season!</p>
        </div>
        </>
    )

}

export default Card;