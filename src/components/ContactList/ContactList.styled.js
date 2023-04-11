import styled from "styled-components";

export const List = styled.ul`
    list-style: none;
    /* margin: 0 auto; */
    width: 500px;
    display:flex;
    flex-direction: column;
    gap: 13px;
    padding: 0;
`;

export const ContactItem = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`
export const ContactValue = styled.span`
     font-size: 24px;
`

export const DelButton = styled.button`
    display: block;
    width: 120px;
    font-size: 16px;
    display: inline-block;
    outline: 0;
    border: 0;
    cursor: pointer;
    padding: 6px;
    border-radius: 8px;
    color: #fff;
    height: 30px;
    background-color: grey;
`

