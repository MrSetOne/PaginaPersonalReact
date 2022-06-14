import './Knowledgegrid.css'

function Knowledgegrid({arr}) {
    const result = arr.map(element => {
        return (
            <div className="Knowledge__card">
                <img src={element.img} alt={element.name} className="Knowledge__image" />
                <p className="Knowledgecard__title">{element.name}</p>
            </div>
        )
    })
    return (
        <div className="Knowledgegrid">
            {result}
        </div>
    )
}

export default Knowledgegrid