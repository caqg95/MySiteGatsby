import React, { useState, useEffect } from 'react';
import { useStaticQuery, grap, graphql } from "gatsby"
const CodigoFacilito = () => {

    const data = useStaticQuery(graphql`{
        dataJson{
            data {
                courses {
                  progress
                  title
                  url
                }
              }
          }
    }`);
    console.log(data.dataJson.data.courses);
    const coursesC = data.dataJson.data.courses.slice(1, 5)
    return (

        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center">My courses online in CodigoFacilito</h2>
                    <div className="flex">
                        {
                            coursesC.map(course => (
                                <div className="shadow p-8 bg-white mr-4 rounded">
                                    <h4 className="font-bold">{course.title}</h4>
                                    <div className="text-center">
                                       <span className="inline-block bg-purple-200 text-purple-700 p-2 mt-2 radius">Progess %:{parseInt(course.progress)}</span> 
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CodigoFacilito;