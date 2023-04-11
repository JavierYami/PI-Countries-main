import style from './Pagination.module.css'

const Pagination = ( {totalPosts, postsPerPage, setCurrentPage, currentPage} ) => {

    let pages = [];


    for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i)
    }

    return (
        <div className={style.container}>
            {pages.length > 0 ? <p>Showing page {currentPage} of {pages.length}</p> : ''}
            {pages.length > 0 ? <button onClick={()=>setCurrentPage(pages[0])}>First</button> :''}
            {currentPage !== 1 && pages.length >0 ? <button onClick={()=>setCurrentPage(currentPage - 1)}>Previous</button> : ''}
            {
                pages.map((page, index) => <button key={index} onClick={()=>setCurrentPage(page)}>{page}</button>)
            }
            {currentPage !== pages.length && pages.length > 0?<button onClick={()=>setCurrentPage(currentPage + 1)}>Next</button> : '' }
            {pages.length > 0 ? <button onClick={()=>setCurrentPage(pages.length)}>Last</button> :''}
        </div>
    )
}

export default Pagination;