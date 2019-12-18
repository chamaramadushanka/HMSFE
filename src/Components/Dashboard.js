import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import {MyChart} from './Charts/chart';


export class Dashboard extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    }
  }
  
  render(){
    if(this.state.loggedIn===false){
      return <Redirect to ="/loginform"/>
    }
    return (
        <div id = "content-wrapper">
          <div id="content-wrapper">
          <div class="container-fluid">
            {/* <!-- Breadcrumbs--> */}
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                
                <a href="#">Dashboard </a>
              </li>
              <li class="breadcrumb-item active">Overview</li>
            </ol>

            {/* <!-- Icon Cards--> */}
            <div class="row">
              <div class="col-xl-3 col-sm-6 mb-3">
                <div class="card text-white bg-primary o-hidden h-100">
                  <div class="card-body">
                    <div class="card-body-icon">
                      <i class="fas fa-fw fa-comments"></i>
                    </div>
                    <div class="mr-5">sdfdsfsdf</div>
                  </div>
                  <a class="card-footer text-white clearfix small z-1" href="#">
                    <span class="float-left">Total Employees</span>
                    <span class="float-right">
                      <i class="fas fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 mb-3">
                <div class="card text-white bg-warning o-hidden h-100">
                  <div class="card-body">
                    <div class="card-body-icon">
                      <i class="fas fa-fw fa-list"></i>
                    </div>
                    <div class="mr-5">dsfsdfdsf</div>
                  </div>
                  <a class="card-footer text-white clearfix small z-1" href="#">
                    <span class="float-left">On TIme Percentage</span>
                    <span class="float-right">
                      <i class="fas fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 mb-3">
                <div class="card text-white bg-success o-hidden h-100">
                  <div class="card-body">
                    <div class="card-body-icon">
                      <i class="fas fa-fw fa-shopping-cart"></i>
                    </div>
                    <div class="mr-5">xxxxxxxx</div>
                  </div>
                  <a class="card-footer text-white clearfix small z-1" href="#">
                    <span class="float-left">On Time Today</span>
                    <span class="float-right">
                      <i class="fas fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 mb-3">
                <div class="card text-white bg-danger o-hidden h-100">
                  <div class="card-body">
                    <div class="card-body-icon">
                      <i class="fas fa-fw fa-life-ring"></i>
                    </div>
                    <div class="mr-5">xxxxxx</div>
                  </div>
                  <a class="card-footer text-white clearfix small z-1" href="#">
                    <span class="float-left">Late Percentage</span>
                    <span class="float-right">
                      <i class="fas fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>


            {/* <!-- DataTables Example --> */}
            <div class="card mb-3">
              <div class="card-header">
                <i class="fas fa-table"></i>
                Analysis</div>
              <div class="card-body">
                <div className="piechart">
                {/* <MyChart/> */}
                </div>
              </div>
              <div class="card-footer small text-muted">EcoBoiz - Performance Analysis</div>
            </div>

          </div>
          {/* <!-- /.container-fluid --> */}

          {/* <!-- Sticky Footer --> */}
          <footer class="sticky-footer">
            <div class="container my-auto">
              <div class="copyright text-center my-auto">
                <span>Copyright © EcoBoiz 2019</span>
              </div>
            </div>
          </footer>
        </div>
        </div>
    )
}
}

export default Dashboard
