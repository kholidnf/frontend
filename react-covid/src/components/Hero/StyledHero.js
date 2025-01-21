import styled from "styled-components";

const StyledHero = styled.div`
/*small screen*/
{
  margin: 1rem;
}

section{
  display: flex;
  flex-direction: column;
  text-align: center;
}

.hero__left{
  margin-bottom: 1rem;
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

p{
  color: #64748B;
  font-size: 1.563rem;

}

img {
  max-width: 100%;
  height: auto;
  border-radius: 25px;
}

/* Medium Screen */
@media (min-width: 768px) {
  /*
   * Nothing TODO Here.
   * We dont change style Hero. 
   */
}

/* Large Screen */
@media (min-width: 992px) {
  {
    max-width: 1200px;
    margin: 5rem auto;
  }

  section {
    margin: 0 1rem;
    flex-direction: row;
    justify-content: space-between;
  }

  .hero__left {
    flex-basis: 40%;
    text-align: justify;
  }

  .hero__right {
    flex-basis: 50%;
  }
 
}
`;

export default StyledHero;
