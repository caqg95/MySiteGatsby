import React from 'react';
import { useStaticQuery, graphql,Link } from 'gatsby';
export default (props) => {
    const data = useStaticQuery(graphql`
    {
        allEducationJson(sort:{fields:slug, order:DESC} ) {
            edges {
                node{
                    slug
                    title
                    description
                }
            }
        }
    }
    `)
   //console.log(data.allEducationJson.edges);
    return (
        <div className="max-w-4xl mx-auto mt-20">
            <h2 className="text-3xl font-bold text-center">Know about my educational training</h2>
            <nav className="flex justify-center mt-8">
                {

                    data.allEducationJson.edges.map((element, index) => {
                        const { node } = element;
                        return (
                            <article key={index} className="flex-1 bg-white shadow m-4 max-w-sm p-2">
                                <header>
                                    <p className="font-bold leading-loose">{node.title}</p>
                                    <div className="mt-8">
                                        <p className="font-light h-20">{node.description}</p>
                                        <Link to={`/${node.slug}`} className="btn inline-block mt-4">
                                            Go
                                        </Link>
                                    </div>
                                </header>
                            </article>
                        );
                    })
                }
            </nav>
        </div>
    );
}