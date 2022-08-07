import { ClockIcon, FireIcon } from "utils/icons";
import { CourseModel } from "utils/types/firebase";

import { PrimaryButton } from "../Buttons";
import { Container } from "./styles";

type Ignore = "videos" | "contract";
interface CardProps extends Omit<CourseModel, Ignore> {}

function Card({
  id,
  description,
  instructor,
  name,
  total_duration,
  score,
  image,
}: CardProps) {
  return (
    <Container to={`/course/${id}`}>
      <header>
        <img className="img" src={image} alt="" />
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
          <p className="description">{description}</p>
        </div>

        <PrimaryButton className="btn">View course</PrimaryButton>
      </footer>
    </Container>
  );
}

export default Card;
