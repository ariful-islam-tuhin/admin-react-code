import * as React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import NotFound from '../../NotFound/NotFound';
import AddProducts from '../AddProducts/AddProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../Hooks/useAuth';
import './Dashboard.css'
import AdminRoute from '../../PrivetRoute/AdminRoute';





const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();
  // console.log(admin.admin)
  return (
    <div>
      <h3 className="bg-warning p-2">Dashboard page</h3>
      <Row className="w-100">
        <Col xs={12} md={2}>
          <div className=" bg-dark shadow">
            <Nav className="dash-nav ">


              {!admin.admin && (
                <>
                  <Nav.Link as={Link} to={`${url}`} className="dashboad-style">
                    Dashboard Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/" className="dashboad-style">
                    Home Page
                  </Nav.Link>              

                </>
              )}

              {admin.admin && (
                <>

                  <Nav.Link
                    as={Link}
                    to={`${url}/addproduct`}
                    className="dashboad-style"
                  >
                    Add Product
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to={`${url}/makeadmin`}
                    className="dashboad-style"
                  >
                    MakeAdmin
                  </Nav.Link>

                </>
              )}

            </Nav>
          </div>
        </Col>
        <Col xs={12} md={10}>
          <Switch>
            <Route exact path={path}>
              <div className="dash-board">
                <h6> dashboard home </h6>
                <p>here we can set any other component which is we can see in the dashboard home </p>
              </div>
            </Route>
            <AdminRoute path={`${path}/addproduct`}>
              <AddProducts></AddProducts>
            </AdminRoute>
            <AdminRoute path={`${path}/makeadmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <Route path={`${path}/*`}>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Col>
      </Row>
    </div>

  );
}



export default Dashboard;

