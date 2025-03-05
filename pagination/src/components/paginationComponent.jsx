export default function PaginationComponent ({ setCurrentPage, noOfPages,  currentPage }) {    
    const handleNumbers = (n) =>{
        setCurrentPage(n)
      }
    
      const handleNext = () => {
        setCurrentPage(prev => prev + 1)
      }
    
      const handlePrev = () => {
        setCurrentPage(prev => prev -1)
      }

    return (
        <div className="pagenationContainer">
        <button 
          className="pageNumber"
          onClick={handlePrev}
          disabled = {currentPage === 0}
        >
          ◀
        </button>
        {[...Array(noOfPages).keys()].map((n) => (
          <button 
          key={n} 
          className={"pageNumber" + ' ' + (n=== currentPage ? "active" : '')}
          onClick={() => handleNumbers(n)}
          >
          {n}
          </button>
        ))}
        <button 
          className="pageNumber"
          onClick={handleNext}
          disabled = {currentPage === noOfPages - 1}
        >
          ▶
        </button> 
      </div>
    )
}