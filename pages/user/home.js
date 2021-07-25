//@ts-check
import Head from 'next/head' 
import Header from '../../componen/user/header'
import Kolomproduk from '../../componen/user/kolomproduk'

// import Moment from 'react-moment'



export default function Home() {

  
  return (
    <div>
      <Head>
        <title>Batik</title>
      </Head>
      <Header/>
      <div className='row'>
  
          <Kolomproduk />
     

      </div>
    </div>
  )
}
