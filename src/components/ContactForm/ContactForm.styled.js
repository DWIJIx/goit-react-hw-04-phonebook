import styled from "styled-components";
import { Form as FormikForm, ErrorMessage as FormikError, Field as FormikInput} from 'formik'

export const FormField = styled.label`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

export const Form = styled(FormikForm)`
    border: 1px solid black;
    width: 500px;
    padding: 10px;
`;

export const Field = styled(FormikInput)`
    font-size: 16px;
    padding: 5px;
    width: 100%;
    border: 2px solid black;
    border-radius: 5px;
`;



export const ErrorMessage = styled(FormikError)`
    color: red;
`;

export const SubmitButton = styled.button`
    display: block;
    width: 40%;
    font-size: 16px;
    display: inline-block;
    outline: 0;
    border: 0;
    cursor: pointer;
    padding: 10px;
    border-radius: 8px;
    color: #fff;
    height: 2.6em;
    background-color: grey;
`;