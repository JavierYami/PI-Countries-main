
const Pagination = ( {totalPosts, postsPerPage, setCurrentPage} ) => {

    let pages = [];


    for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i)
    }

    return (
        <div>
            {
                pages.map((page, index) => <button key={index} onClick={()=>setCurrentPage(page)}>{page}</button>)
            }
            {console.log(pages)}
        </div>
    )
}

export default Pagination;