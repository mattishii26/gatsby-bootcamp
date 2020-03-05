import React from "react"
import {Link} from 'gatsby'

import Layout from '../components/Layout'

const IndexPage = () => {
  return (
    <Layout>
       <h1>Hello</h1>
       <h2>I'm matthew, a full stack developer living in California</h2>
       <p>
       Need a Developer? <Link to="/contact">Contact Me</Link>
     </p>
       <p>
       Learn about me? <Link to="/about">Contact Me</Link>
       </p>
       <p>
       Find me on <a href="https://www.linkedin.com/in/matthew-ishii-b1b31499/" target="_blank">LinkedIn</a>
     </p>
    </Layout>
  )
  // return (
    
  //   <div>
  //     <h1>Hello</h1>
  //     <h2>I'm matthew, a full stack developer living in California</h2>
  //     <p>
  //     Need a Developer? <Link to="/contact">Contact Me</Link>
  //     </p>
  //     <p>
  //     Learn about me? <Link to="/about">Contact Me</Link>
  //     </p>
  //     <p>
  //     Find me on <a href="https://www.linkedin.com/in/matthew-ishii-b1b31499/" target="_blank">LinkedIn</a>
  //     </p>
  //     <Footer/>
  //   </div>
  // )
}

export default IndexPage;