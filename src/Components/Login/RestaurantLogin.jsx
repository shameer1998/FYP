import React from 'react';


//=========================Importing=================
import {Link} from "react-router-dom";

import '../Header/Header'
const Login = () => {
    return ( 
        <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right" >
                    <a href="#" >Forgot password?</a>
                    Don't have an Account? Please <Link style= {{textDecoration: 'none',color: 'black'  }} to= "/restaurant-signup">Signup As a Restaurant</Link>
                </p>
            </form>
     );
}
 
export default Login;