const FullFilterBlock = ({ title, blocks }) => {
    return(
        <div className="full-filter-block">
            <div className="full-filter-block-title">
                { title }
            </div>
            <div className="full-filter-option-container">
                { blocks.map((block) => (
                    <div className="full-filter-option">{ block }</div>
                ))}
            </div>
        </div>
    )
}

export default FullFilterBlock;