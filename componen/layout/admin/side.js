//@ts-check
import Link from 'next/link'
export default function Side() {
    return(
      
        <div className='sidebar'  >
             <nav style={{height:'100%'}} className="navbar navbar-dark align-items-start sidebar  accordion  p-0">
    <div className="container-fluid d-flex flex-column p-0" >
    <div className="border-end bg-white" id="sidebar-wrapper">
          <div className="list-group list-group-flush">
        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="home">Admin Page</a>
        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="home">Dashboard</a>
        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="carts">Carts</a>
        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="users">Users</a>
      </div>
    </div>
    </div>
  </nav>
        </div>
    )
    
}