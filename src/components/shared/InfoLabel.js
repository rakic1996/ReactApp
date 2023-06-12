const InfoLabel = ( {demoText }) => {
    return (
        <li className="info__list">
        <label className="info__label">{demoText}:</label>
        <input type="text" className="in-text"/>
        </li>
    )
}
export default InfoLabel