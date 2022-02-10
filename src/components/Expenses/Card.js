import '../../UI/Card.css'

function Card(props) {
    const classNames = "Card " + props.className
    return (
        <div className={classNames}>{props.children}</div>
    )
}

export default Card;