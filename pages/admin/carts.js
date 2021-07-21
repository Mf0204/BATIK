import React from 'react'

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
            <div className="table-responsive">
              <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                <thead>
                  <tr>
                    <th>ID Produk</th>
                    <th>ID user</th>
                    <th>Alamat Pengiriman</th>
                    <th>Total Biaya</th>
                    <th>tanda proses</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>Logo edit</td>
                  </tr>
                  <tr>
                    <td>Donna Snider</td>
                    <td>Customer Support</td>
                    <td>New York</td>
                    <td>27</td>
                    <td>2011/01/25</td>
                  </tr>
                </tbody>
              </table>
            </div>
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