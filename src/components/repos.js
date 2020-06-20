import React, { useState, useEffect } from 'react';
//import fetchRepos from '../libs/fetchRepositorios'
import Repo from './repo';

const Repos = () => {

    const [repositorios, guardarRepositorios] = useState([]);
    const [repositorioscount, guardarRepositoriosCount] = useState([]);
    useEffect(() => {
        const data = sessionStorage.getItem("repositorios");
        let myRepos;
        //console.log(data);
        if (data) {
            myRepos = JSON.parse(data);   
            console.log(myRepos);        
            guardarRepositoriosCount(myRepos.length);
            myRepos=myRepos.slice(0,12);
            console.log(myRepos);
            return guardarRepositorios(myRepos);
        }

        async function fetchRepos() {
            const response = await fetch("https://api.github.com/users/caqg95/repos?sort=created_at&order=desc");
            myRepos = await response.json()
            guardarRepositoriosCount(myRepos.length);
           // console.log('lol');
            sessionStorage.setItem("repositorios", JSON.stringify(myRepos))
            myRepos=myRepos.slice(0,12)
            guardarRepositorios(myRepos);
        }
        fetchRepos();
    }, [])

    return (
        <div className="max-w-4xl mx-auto mt-12">
            <header className="text-center">
                <h2 className="text-3xl font-bold">My work in Open Source</h2>
                <p>Collaboration and Contribution</p>
            </header>
            <ul className="repos-list">
                {
                    repositorios.map(repo => {
                        return <Repo
                            key={repo.id}
                            repo={repo} />
                    })
                }
            </ul>
            <div className="mt-8 text-center">
                <a
                 href="https://github.com/caqg95"
                 className="btn"
                 target="_blank"
                 rel="noopener noreferrer"
                >
                    See more in GitHub {repositorioscount}
                </a>
            </div>
        </div>
    );
}

export default Repos;