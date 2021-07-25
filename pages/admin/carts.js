import React from 'react'
import TablePesanan from '../../componen/admin/tabelpesanan' 
export default function admincart() {
    return (
    <div>
  <title>Admin Page</title>
  {/* Favicon*/}
  <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
  <div className="d-flex" id="wrapper">    
    <div id="page-content-wrapper">     
      <div class="container-fluid">
      <div>
        <h1 className="h3 mb-2 text-gray-800">Tabel Pesanan</h1>
        <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
          For more information about DataTables, please visit the <a target="_blank" >official DataTables documentation</a>.</p>
        {/* DataTales Example */}
        <div className="card shadow mb-4">
          <div className="card-body">
         <TablePesanan/>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  {/* Bootstrap core JS*/}
  {/* Core theme JS*/}
</div>
    )}