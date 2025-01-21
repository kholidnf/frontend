import styled from "styled-components";

const StyledCovids = styled.div`
/*small screen*/
{
    margin: 1rem;
  }

section{
    text-align: center;
}

h1{
    color: #06D6A0;
    margin-bottom: 1rem;
    font-size: 3.815rem;
}
  
h3{
    color: #118AB2;
    margin-bottom: 1.5rem;
}

/*medium screen*/
@media (min-width: 768px) {
    {
        padding: 0 6rem;
    }
}

/* Large Screen */
@media (min-width: 992px) {
    {
        padding: 0 6rem;
        margin: 10rem auto;
    }
    .global__container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
}
`;

export default StyledCovids;