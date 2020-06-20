import React from 'react';
import styled from 'styled-components';
import ilustration from '../imgs/curriculum.svg';

const HeaderStyled = styled.div`
.dark-mode {
    cursor: pointer;
    .moon {
      transform: rotate(-25deg);
      display: inline-flex;
      margin-right: 10px;
    }
    p {
      font-size: 12px;
      font-weight: 600;
    }
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 3em;
    h1 {
      font-size: 24px;
    }
    p {
      font-size: 1rem;
    }
  }
`

const HeaderMain = ({ setDarkMode, darkMode }) => {
    function handleClick() {
        setDarkMode(!darkMode)
    }
    return (
            <nav className="flex items-center justify-between flex-wrap bg-purple-700 p-2">
                <div className="flex items-center flex-no-shrink text-white mr-6">
                    <img src={ilustration} alt="Icon my site" style={{width:"48px",height:"48px"}}></img>
                    <span className="font-semibold text-xl tracking-tight pl-4">!Your Welcome¡</span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                        <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    {/* <div className="text-sm lg:flex-grow">
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                        Docs
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                        Examples
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
                        Blog
                    </a>
                </div> */}
                    <div>
                        {/* <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">Download</a> */}
                       
                    </div>
                </div>
            </nav>
    );
}

export default HeaderMain;