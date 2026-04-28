
export function Card({link , text , price}){
    return(
    <div className="card border-0 bg-transparent ">
        <img src={link} alt=" img"  className=""/>
        <p className="text-sm font-medium pt-3 pb-0 text-sm">{text}</p>
        <p className="text-sm font-medium">{price}</p>
    </div>
    );
}