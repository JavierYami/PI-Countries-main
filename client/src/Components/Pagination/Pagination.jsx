import style from './Pagination.module.css'

const Pagination = ( {totalPosts, postsPerPage, setCurrentPage} ) => {

    let pages = [];


    for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i)
    }

    return (
        <div className={style.container}>
            {pages.length > 0 ? <button onClick={()=>setCurrentPage(pages[0])}>First</button> :''}
            {
                pages.map((page, index) => <button key={index} onClick={()=>setCurrentPage(page)}>{page}</button>)
            }
            {pages.length > 0 ? <button onClick={()=>setCurrentPage(pages.length)}>Last</button> :''}
        </div>
    )
}

export default Pagination;