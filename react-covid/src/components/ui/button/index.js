import styled, {css} from "styled-components";

//styling menggunakan tagged template
const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    background-color: ${function(props){
        if(props.variant){
            return props.theme.colors[props.variant];
        }else {
            return props.theme.colors['primary'];
        }
    }};

    //jika ada props full, tambahkan css
    ${(props)=> props.full && css `
        display: block;
        width: 100%;
    `}

    ${(props)=> props.size ?  props.theme.size[props.size] : props.theme.size['md']}

`;

export default Button; 