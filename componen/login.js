//@ts-check
import React ,{useState} from'react';
export default function loginform({Login,error }){
    const [details ,setDetails] = useState({username :'', password: ''});
    const submitHandler = e =>{
        e.preventDefault();
        const user = Login(details);

    }
    return(

        <div>
                <form id="contactForm" onSubmit={submitHandler} data-sb-form-api-token="API_TOKEN">
                {/* Email address input*/}
                {(error!='')?( <p style={{fontSize: "16px",color: "blue",textAlign: "center",fontWeight: "bold",marginTop: "18px"}}  >{error}</p>):''}
                <div className="form-floating mb-3">
                  <input 
                  className="form-control" 
                  id="username" type="username" 
                
             
                  onChange={e =>setDetails({...details, username: e.target.value})} value={details.username} />
                  <label typeof='text'>Username</label>
                  <div className="invalid-feedback" data-sb-feedback="email:required">An username is required.</div>
                  <div className="invalid-feedback" data-sb-feedback="email:email">Username is not valid.</div>
                </div>
                {/* Phone number input*/}
                <div className="form-floating mb-3">
                  <input 
                  className="form-control" 
                  id="phone" 
                  type="password" 
                  placeholder="" 
                  data-sb-validations="required" 
                  onChange={e =>setDetails({...details, password: e.target.value})} value={details.password}
                  />
                  <label htmlFor="phone">Password</label>
                  <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                </div>
                {/* has successfully submitted*/}
                <div className="d-none" id="submitSuccessMessage">
                  <div className="text-center mb-3">
                    <div className="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                  </div>
                </div>
                {/* Submit error message*/}
                {/**/}
                {/* This is what your users will see when there is*/}
                {/* an error submitting the form*/}
                <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                {/* Submit Button*/}
                <button className="btn btn-primary btn-xl " id="submitButton" type="submit">LOGIN</button>
              </form>
        </div>
    )
}