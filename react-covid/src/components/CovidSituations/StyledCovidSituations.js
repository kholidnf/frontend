import styled from "styled-components";

const StyledCovidSituations = styled.div`
/*small screen*/
{
    margin: 1rem;
}

section{
    margin: 5rem 0;
    text-align: center;
}

h1{
    color: #06D6A0;
    margin-bottom: 1rem;
    font-size: 3.815rem;
    text-align:center;
}
  
h3{
    color: #118AB2;
    margin-bottom: 1.5rem;
    text-align:center;
}
.global__container{
        display: flex;
        flex-direction: column;
}
/*medium screen*/
@media (min-width: 768px) {
   .global__container{
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
   }
}

/* Large Screen */
@media (min-width: 992px) {
    {
        max-width: 1200px;
        margin: 3rem auto;
    }
    section{
        margin: 0 1rem;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
    .global__container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
}
`;

export default StyledCovidSituations;