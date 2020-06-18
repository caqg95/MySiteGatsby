import React from 'react';
const repo = ({ repo }) => {
    return (
        <li className="flex items-center">
            <div className="w-10/12 overflow-x-hidden">
                <h4 className="text-pink-600 font-bold truncate">{repo.name}</h4>
                <p className="text-sm text-gray-800 overflow-y-hidden" style={{ height: "1.5em" }}>{repo.description}</p>
            </div>
            <div className="flex-1 text-right">
                <a href={repo.html_url} target="_blank" rel="nopener noreferrer">See</a>
            </div>
        </li>
    );
}

export default repo;