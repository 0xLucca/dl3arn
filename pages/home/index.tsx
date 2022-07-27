import Card from "@/components/Dashboard/Card";
import Navbar from "@/components/Navbar";
import CardPlaceholder from "@/components/Placeholders/Card";
import useCourses from "hooks/useCourses";
import styled from "styled-components";

const getDescription = () =>
  `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi sequi, harum dolorem ullam adipisci optio architecto necessitatibus nesciunt ab soluta, quisquam natus cum provident amet officia fuga. Aspernatur, alias quasi?`;

const Container = styled.div`
  padding: 3.5rem 0;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;

  section {
    h2 {
      font-size: 1.25rem;
      padding: 1rem 0;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem 3rem;
    }
  }
`;
function Home() {
  const { courses, isLoading } = useCourses();

  return (
    <>
      <Navbar />
      <Container>
        <h1>Home</h1>
        <main>
          <section>
            <h2>courses</h2>
            <div className="cards">
              {Array.from({ length: 19 }).map((_, i) =>
                isLoading ? (
                  <CardPlaceholder />
                ) : (
                  <Card
                    key={i}
                    id={courses[i].id}
                    name={courses[i].name}
                    time={courses[i].time}
                    score={courses[i].score}
                    instructor={courses[i].instructor}
                    image={courses[i].image}
                    description={i === 0 ? getDescription() : undefined}
                  />
                )
              )}
            </div>
          </section>
        </main>
      </Container>
    </>
  );
}

export default Home;