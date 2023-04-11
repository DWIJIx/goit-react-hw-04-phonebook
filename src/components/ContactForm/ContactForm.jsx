import { Formik } from 'formik';
// import { Component } from "react";
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import * as Yup from 'yup';
import {FormField, Form, Field, ErrorMessage, SubmitButton} from './ContactForm.styled'


const ContactFormSchema = Yup.object().shape({
   
    name: Yup.string()
        .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, 'Is not in correct format')
        .required('Please, enter contact name'),
    number: Yup.string()
        .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, 'Is not in correct format')
        .required('Please, enter phone number'),
});

export const ContactForm = ({onSubmit}) => {
    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            validationSchema={ContactFormSchema}
            onSubmit={(values, actions) => {
                onSubmit({ ...values, id: nanoid() });
                actions.resetForm()
            }}
        >
            <Form>
                <FormField>
                    Name
                    <Field type="text" name="name"/>
                    <ErrorMessage name="name" component="span"/>
                </FormField>
                <br></br>
                <FormField htmlFor="">
                    Number
                    <Field type="tel" name="number"/>
                    <ErrorMessage name="number" component="span"/>
                </FormField>
                <br></br>
                <SubmitButton type="submit">Add contact</SubmitButton>
            </Form>
            </Formik>
        )
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}



// export class ContactForm extends Component {
//     state = {
//         name: '',
//         number: ''
//     }
//     // Метод для записування даних в стейт при введенны в input
//     handleChange = (event) => {
//         // Деструктиризація event.currentTarget
//         const { name, value } = event.currentTarget
//         // Перезаписуємо в стейт name i number
//         this.setState({
//             [name]: value
//         })       
//     }
    
//     // Метод сабміну форми.
//     handleSubmit = event => {
//         event.preventDefault();
//         // this.props.onSubmit({ name: this.state.name, number: this.state.number, id: nanoid() })


//         // Предаємо новий об'єкт контакту в App через функцію onSubmit (вона передана пропом onSubmit={this.addContact} ) 
//         this.props.onSave({ ...this.state, id: nanoid() })
//         this.resetForm()
//     }

//     resetForm = () => {
//         this.setState({name: '', number: ''})
//     } 

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name
//                     <input
//                         type="text"
//                         name="name"
//                         // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         requiredContactForm
//                         value={this.state.name}
//                         // При введенні даних в інпут викликаємо метод для записування в стейт
//                         onChange={this.handleChange}
//                     />
//                 </label>
//                 <br></br>
//                 <label htmlFor="">
//                     Number
//                     <input
//                         type="tel"
//                         name="number"
//                         // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                         required
                        
//                         value={this.state.number}
//                         // При введенні даних в інпут викликаємо метод для записування в стейт
//                         onChange={this.handleChange}
//                     />
//                 </label>
//                 <br></br>
//                 <button type="submit">Add contact</button>
//             </form>
//         )
//     }  
// }

