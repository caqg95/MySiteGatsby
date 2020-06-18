import React, { Fragment } from "react";
import Header from '../components/header';
import Repos from '../components/repos';
//import CodigoFacilito  from '../components/codifofacilito';
import EduNav  from '../components/education-nav'
export default function Home() {
  return (
    <Fragment>
      <Header />
      <EduNav/>
      <Repos />     
    </Fragment>

  )
}
