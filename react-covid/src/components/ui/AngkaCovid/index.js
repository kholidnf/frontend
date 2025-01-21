import styled from "styled-components";

//styling menggunakan tagged template
const AngkaCovid = styled.h2`
color: ${(props)=>{
    if(props.status === "confirmed"){
        return "red";
    }else if(props.status === "recovered"){
        return props.theme.colors['secondary']
    }else{
        return props.theme.colors['danger']
    }
}}
`;

export default AngkaCovid;