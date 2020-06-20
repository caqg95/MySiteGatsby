import React, { Fragment, useState, useEffect } from "react";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import HeaderMain from '../components/HeaderMain';
import Header from '../components/header';
import Repos from '../components/repos';
//import CodigoFacilito  from '../components/codifofacilito';
import EduNav from '../components/education-nav';
import Footer from '../components/Footer';

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

  // optional configuration
  const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_RIGHT,
    timeout: 5000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
  }
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <HeaderMain darkMode={darkMode} setDarkMode={setDarkMode} />
      <Header />
      <EduNav />
      <Repos />
      <Footer/>
    </AlertProvider>

  )
}
