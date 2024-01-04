

const Pokemon = ({id, name, image,type}) => {
    return (
        <div className={style}>
            <div className="#"> #0{id}</div>
            <img src={image} alt={name} />
            <div className="#">
            
            <h3>{name}</h3>
            <small>Type: {type}</small>
        </div>
    </div>
    )
}