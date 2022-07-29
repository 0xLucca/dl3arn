import Image from "next/image";
import Router from "next/router";
import { ClockIcon, FireIcon } from "utils/icons";
import Course from "utils/types/Course";
import { PrimaryButton } from "../Buttons";
import { Container } from "./styles";

interface CardProps extends Omit<Course, "videos"> {}
function Card({
  uid,
  description,
  instructor,
  name,
  total_duration,
  score,
  image,
}: CardProps) {
  return (
    <Container>
      <header>
        <Image className="img" layout="fill" src={image} alt="" />
      </header>

      <footer>
        <div className="info">
          <div>
            <h3 className="name">{name}</h3>
            <p className="instructor">{`by ${instructor.name}`}</p>
          </div>
          <div className="meta">
            <time>
              <ClockIcon size={14} /> {total_duration}
            </time>
            <p>
              <FireIcon size={14} /> {score}
            </p>
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

        <PrimaryButton
          onClick={() => Router.push(`/course/${uid}`)}
          className="btn"
        >
          View course
        </PrimaryButton>
      </footer>
    </Container>
  );
}

export default Card;
