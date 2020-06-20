import React, { Fragment, useState, useEffect } from "react";
import HeaderMain from '../components/HeaderMain';
import Header from '../components/header';
import Repos from '../components/repos';
//import CodigoFacilito  from '../components/codifofacilito';
import EduNav from '../components/education-nav'
export default function Home() {

  const [darkMode, setDarkMode] = useState(false);
  const [checked, setChecked] = useState(false)
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'

  function changeMedia(mq) {
    setDarkMode(mq.matches)
    setChecked(mq.matches)
  }
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    mq.addListener(changeMedia)
    setDarkMode(mq.matches)
    setChecked(mq.matches)
    return () => {
      mq.removeListener(changeMedia)
    }
  }, [])
  return (
    <Fragment>
      <HeaderMain darkMode={darkMode} setDarkMode={setDarkMode} />
      <Header />
      <EduNav />
      <Repos />
    </Fragment>

  )
}
