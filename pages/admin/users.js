import React from 'react'
import Tableuser from '../../componen/admin/tabeluser'
export default function users() {
    return (
    <div>
  <title>Admin Page</title>
  <div className="d-flex" id="wrapper">
    <div id="page-content-wrapper">
      <div class="container-fluid">
      <div>
        <h1 className="h3 mb-2 text-gray-800">Tabel User</h1>
        <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
          For more information about DataTables, please visit the <a target="_blank" >official DataTables documentation</a>.</p>
        <div className="card shadow mb-4">
          <div className="card-body">
            <div className="table-responsive">
            <Tableuser/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
</div>
    )}