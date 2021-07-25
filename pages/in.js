//@ts-check
import React ,{useState} from'react';
import Login from '../componen/login'
import Router, { useRouter } from 'next/router'
import useSWR from 'swr'



async function fetcher(url){
  const res = await fetch(url);
  return res.json();
}
export default function login(){
  const [users , setUser] = useState ({username:''});
  const [error , setError] = useState ('');

  let setLoginUser = false;

  const url ='http://localhost:3000/api/user';
  const {data} = useSWR(url,fetcher);
  console.log(data);

  const adminUSer = {
  username :"admin",
  password : "admin"
  } 




const Loginpost = details => {
  console.log(details);
  if(details.username == adminUSer.username && details.password == adminUSer.password){
    console.log('LogIn');
    setUser({
      username:details.username,

    })
    Router.push('/admin/home')
  }

  else{
    for(let i=0;i<data.length;i++){
      if(details.username == data[i].username && details.password == data[i].password){
        setLoginUser = true
      }
    }
    if(setLoginUser){
      Router.push('/user/home')
    }else{
      console.log('details tidak ada ! ')
      setError('Username & Password Salah!')
    }
    
  }
}

const Logout =() =>{
  console.log('Logout')
 
}


    return (


        <section className="page-section" id="contact">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
              <a className="navbar-brand" href="http://localhost:3000/">Suruh Temurose</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li className="nav-item"><a className="nav-link active" aria-current="page" href="http://localhost:3000/">Register</a></li>          
             </ul>
            </div>
            </div>
          </nav>
        <div className="container">
          {/* Contact Section Heading*/}
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0"> Login</h2>
          {/* Icon Divider*/}
         
          {/* Contact Section Form*/}
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
              {/* * * * * * * * * * * * * * * **/}
              {/* * * SB Forms Contact Form * **/}
              {/* * * * * * * * * * * * * * * **/}
              {/* This form is pre-integrated with SB Forms.*/}
              {/* To make this form functional, sign up at*/}
              {/* https://startbootstrap.com/solution/contact-forms*/}
              {/* to get an API token!*/}
   <Login Login = {Loginpost} error = {error} />
            </div>
          </div>
        </div>
      </section>
    )
}