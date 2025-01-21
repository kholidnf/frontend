import styled from "styled-components";

const StyledRegions = styled.div`
/*small screen*/
    {
        width: 384px;
        height: 391px;
        top: 1819px;
        left: 122px ;
        border-radius: 20px;
        box-shadow: 0px 4px 4px 0px #00000040;
        background-color: #FFFFFF;
        margin: 2rem auto;
        padding: 2rem;
    }
   
    @media (min-width: 768px) {
        flex-basis: 50%;
      }
      @media (min-width: 992px) 
       {
            margin: 2rem 1rem;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            flex-basis: 25%;
            padding: 1rem;
        }   
    }
`;

export default StyledRegions;