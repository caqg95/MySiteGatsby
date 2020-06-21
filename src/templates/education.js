import React from 'react';
import { graphql, Link } from 'gatsby';
import Footer from '../components/Footer';

const Template = ({ data }) => {
  const { slug, title, description, education } = data.educationJson;
  const items = education.language.eng.items;

  return (
    <div>
      <header className="py-12 border-blue-500 border-solid border-t-8">
        <div className="max-w-4xl px-4 mx-auto">
          <Link to="/" className="btn uppercase  text-pink-500">
            Go Home
          </Link>
          <h2 className="capitalize text-6xl font-bold">{title}</h2>
          <p className="text-xl">{description}</p>
        </div>
      </header>
      <ul className="px-4">
        {
          items.map((item, index) => (
            (
              <li className="bg-white shadow mt-4 flex max-w-4xl mx-auto" key={index}>
                <p className="vertical-text">{slug}</p>
                <div className="flex items-center flex-1 p-8">
                  <div className="flex-1">
                    <h3>
                      <p className="font-bold text-xl">{item.name}</p>
                      {
                        item.country ? <p> {item.city},{item.country} </p> : null
                      }
                    </h3>
                    {
                      item.degree && <span className="inline-block p-2 radius bg-purple-100 text-purple-700">{item.degree}</span>
                    }
                    {
                      item.url && <a href={item.url} className="block mt-4 lg:inline-block lg:mt-0 text-pink-700 hover:text-gray-900" target="_blank" rel="nopener noreferrer">See more</a>
                    }

                  </div>
                  <div className="inline-block">
                    <span className="inline-block p-2 text-2xl bg-green-100 text-green-700">{item.score}</span>
                  </div>
                </div>
              </li>
            )
          ))
        }
      </ul>
      <Footer />
    </div>
  );
}

export default Template;
export const query = graphql`
    query($slug:String){
        educationJson(slug:{eq:$slug}){
          slug
          title
          description
          education {
            language {
              eng {
                items {
                  city
                  country
                  degree
                  name
                  score
                  url
                }
              }
            }
          }
          }
    }
`;