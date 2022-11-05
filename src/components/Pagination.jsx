import React from "react";

const Pagination = ({reposPerPage, totalRepos, paginate}) => {
  // set the page number to an empty array
 const pageNum = [];

  // loop throw the total over repos per each page
  for (let i=1; i <= Math.ceil(totalRepos/reposPerPage); i++){
    // add the numbers unto the the pageNum array
  pageNum.push(i)
  }

  // Create a list of the array of page numbers 
  const listOfPageNums = pageNum.map((num)=>{ 
    return <li className="list-box" key={num}>
      {/*each page number is a link that accepts a prop called paginate*/}
            <a className="paginate-link" href="#" onClick={()=>paginate(num)}>{num}</a>
          </li> 
  })
  
  return (
    <nav >
       {/*render an unorder list of page numbers*/}
      <ul className="paginate-box">
        {listOfPageNums}
      </ul>
    </nav>
  )
}

export default Pagination;
