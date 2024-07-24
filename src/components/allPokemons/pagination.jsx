import React from 'react';

function Pagination({ currentPage, totalPages, beginPage, prevPage, nextPage, endPage }) { // Parameters for the pagination and the retun with the button
    return (
        <div className="buttons">
            <button onClick={beginPage} disabled={currentPage === 1}>Begin</button>
            <button onClick={prevPage} disabled={currentPage === 1}>Vorige</button>
            <button onClick={nextPage} disabled={currentPage === totalPages}>Volgende</button>
            <button onClick={endPage} disabled={currentPage === totalPages}>Einde</button>
        </div>
    );
}

export default Pagination;