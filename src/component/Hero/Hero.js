import styles from "./Hero.module.css";
import StyledHero from "./Hero.styled";
function Hero() {
  return (
    <StyledHero>
      <section>
        <div>
          <h2>Spiderman</h2>
          <h3>Genre: Thriller, Drama, Romance</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <button>Watch</button>
        </div>
        <div>
          <img src="https://picsum.photos/200/300/" />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
