import styled from '@emotion/styled';

export const DivMain = styled.div`
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;

    text-align: center;
    border: 3px solid darkolivegreen;
    border-radius: 8px;
    color: darkolivegreen;

    button {
        padding: 11px;
        margin-right: 8px;

        font-weight: 700;
        font-size: 18px;

        background-color: transparent;
        border: 0px solid gray;
        border-radius: 3px;
        background-color: lightgrey;
        color: darkolivegreen;

        transition: all 200ms linear;
    }
    button:hover {
        cursor: pointer;
        color: lightgrey;
        background-color: darkolivegreen;
    }
    button:active {
        scale: 0.9;
    }
    p {
        text-align: left;
    }
    p:nth-of-type(4) {
        font-weight: 700;
    }
    div:last-child {
        padding: 0px 36px 10px 36px;
    }

`;