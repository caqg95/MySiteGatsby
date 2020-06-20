import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';
import { useAlert } from 'react-alert';

const Contact_form = () => {

    const alert = useAlert();

    const [email, setEmail] = useState({
        bodyemail: "",
    });
    const { bodyemail } = email;

    const onChangeEmail = (e) => {
        setEmail({
            ...email,
            [e.target.name]: e.target.value,
        });
    };
    const onSubmitContact = (e) => {
        e.preventDefault();
        //Validar el proyecto
        if (bodyemail === '') {
            alert.error('Ohhh No! ,This field is required!');
            return;
        }
        let templateParams = {
            from_name: 'My Site',
            to_name: 'cquinterogrande@gmail.com',
            subject: 'Email Sent from My Site ',
            message_html: bodyemail,
        }
        emailjs.send(
            'gmail',
            'template_9PfSKVLi',
            templateParams,
            'user_1cakRhoun6hRmR5NCzNQ5'
        ).then(res => {
            alert.success(`Wow, thanks for contacting me, I'll get back to you soon!`);
        }).catch(err =>
            alert.error('Oh well, you failed. Here some thoughts on the error that occured:', err)
        )
        setEmail({
            bodyemail: "",
        })
    };
    return (
        <form
            className="mt-14 text-center"
            onSubmit={onSubmitContact}
        >
            <label
                htmlFor="bodyemail"
                className="block text-gray-700 text-sm font-bold mb-2">Tell me about your idea,that you want to make come true:</label>
            <div className="flex shadow rounded bg-white border p-2">
                <textarea
                    id="bodyemail"
                    name="bodyemail"
                    value={bodyemail}
                    onChange={onChangeEmail}
                    className="flex-1 py-2 px-3 text-gray-700 focus:shadow-outline"
                    placeholder="Remember to add your name and means of contacting you"
                ></textarea>
                <button className="btn ml-4">Send</button>
            </div>

        </form>
    );
}

export default Contact_form;