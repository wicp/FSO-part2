import React from 'react'

const SearchFilter = ({filterText, setFilterText}) => {
    return (
        <div>
            find countries <input type="text" value={filterText} onChange={event => setFilterText(event.target.value)}/>
        </div>
    )
}

export default SearchFilter