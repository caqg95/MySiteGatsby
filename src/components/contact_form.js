import React from 'react';
const contact_form = () => {
    return (
        <form className="mt-14 text-center">
            <label 
            htmlFor="contact-content"
            className="block text-gray-700 text-sm font-bold mb-2">Tell me about your idea,that you want to make come true:</label>
            <div className="flex shadow rounded bg-white border p-2">
                <textarea 
                id="contact-content"
                name="contact-content"
                className="flex-1 py-2 px-3 text-gray-700 focus:shadow-outline"></textarea>
                <button className="btn ml-4">Send</button>
            </div>

        </form>
    );
}

export default contact_form;