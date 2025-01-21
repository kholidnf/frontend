import logo from "./img/hero.png"
import Button from "../ui/button";
import StyledHero from "./StyledHero";
function Hero() {
  return (
    <StyledHero>
      <section>
      <div className="hero__left">
          <h1>Covid ID</h1>
          <h3>
            Monitoring Perkembangan Covid
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            cum accusamus quisquam earum velit ea nobis maiores exercitationem
            nam temporibus. 
          </p>
          <Button size="lg">Vaccine</Button>
        </div>
        <div className="hero__right">
          <img
            src= {logo}
            alt="placeholder"
          />
        </div>
      </section>
    </StyledHero>
     
  );
}

export default Hero;