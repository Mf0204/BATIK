import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import LayoutAdmin from'../componen/layout/admin/layout'
import LayoutUser from'../componen/layout/user/LayoutUser'
import {useRouter} from 'next/router'
import"../styles/sb-admin-2.css"
import"../styles/sb-admin-2.min.css"
import"../styles/untitled.css"
import "../styles/bootstrap.min.css"


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  if(router.pathname.startsWith('/admin/')){
    return(
      <LayoutAdmin>
          <Component {...pageProps} />
      </LayoutAdmin>
    )
  }
  else if(router.pathname.startsWith('/user/')){
    return(
      <LayoutUser>
          <Component {...pageProps} />
    </LayoutUser>
    )
  }
  else{
    return <Component {...pageProps} />
    
  }
}
export default MyApp
