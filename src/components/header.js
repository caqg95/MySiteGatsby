import React from 'react';
import ilustration from '../imgs/undraw_healthy_lifestyle_6tyl.svg'
import Form from './contact_form'
const header = () => {
    return (
        <header className="bg-blue-500">
            <div className="container mx-auto p-12 max-w-4xl">
                <div className="flex justify-center items-center">
                    <div className="flex-1">
                        <h1 className="font-bold text-purple-700  text-5xl">Welcome! I'm Carlos Quintero</h1>
                        <p className="text-xl text-white font-light">I love to program and learn every day</p>
                    </div>
                    <img src={ilustration} alt="Hombre seleccionado un elemento de un grid"
                        className="w-48 md:w-48 lg:w-96"

                    ></img>
                </div>
                <Form></Form>
            </div>
        </header>
    );
}

export default header;