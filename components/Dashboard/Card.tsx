import Image from "next/image";
import { Course } from "../../utils/types";
import { PrimaryButton } from "../Buttons";
import { Container } from "./styles";

interface CardProps extends Course {
  description?: string;
}
function Card({
  description,
  instructor,
  name,
  time,
  score,
  image,
}: CardProps) {
  return (
    <Container>
      <header>
        <Image
          className="img"
          layout="fill"
          width={1920}
          height={1080}
          src={image}
          alt=""
        />
      </header>

      <footer>
        <div className="info">
          <div>
            <h3 className="name">{name}</h3>
            <p className="instructor">{`by ${instructor}`}</p>
          </div>
          <div className="meta">
            <time>{time}</time>
            <p>{score}</p>
          </div>
        </div>

        {description && (
          <p className="description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
            sequi, harum dolorem ullam adipisci optio architecto necessitatibus
            nesciunt ab soluta, quisquam natus cum provident amet officia fuga.
            Aspernatur, alias quasi?
          </p>
        )}

        <PrimaryButton className="btn">View course</PrimaryButton>
      </footer>
    </Container>
  );
}

export default Card;
