import Image from "next/image";
import { Course } from "../../utils/types";
import { PrimaryButton } from "../Buttons";
import { Container } from "./styles";

interface CardProps extends Course {}
function Card({ instructor, name, time, score, image }: CardProps) {
  return (
    <Container>
      <header>
        <Image
          className="img"
          layout="responsive"
          width={1920}
          height={1080}
          src={image}
          alt=""
        />
      </header>

      <footer>
        <div className="description">
          <div>
            <h3 className="name">{name}</h3>
            <p className="instructor">{`by ${instructor}`}</p>
          </div>
          <div className="meta">
            <time>{time}</time>
            <p>{score}</p>
          </div>
        </div>

        <PrimaryButton className="btn">View course</PrimaryButton>
      </footer>
    </Container>
  );
}

export default Card;
