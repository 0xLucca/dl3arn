import styled from "styled-components";

import Card from "@/components/Dashboard/Card";
import CardPlaceholder from "@/components/Placeholders/Card";
import PrivateRoute from "@/components/PrivateRoute";
import useCourses from "@/hooks/useCourses";
import Head from "next/head";
import { PrimaryButton } from "components/Buttons";
import createDoc from "services/firebase/store/create";

const Container = styled.div`
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
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem 3rem;
      @media screen and (min-width: 820px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media screen and (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
`;

function Dashboard() {
  const { courses, isLoading } = useCourses();
  return (
    <PrivateRoute verified>
      <Head>
        <title>DL3arn | Dashboard</title>
      </Head>
      <Container>
        <main>
          <PrimaryButton onClick={createDoc}>Test firestore</PrimaryButton>
          <section>
            <h2>courses</h2>
            <div className="cards">
              {Array.from({ length: 19 }).map((_, i) =>
                isLoading ? (
                  <CardPlaceholder key={i} />
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
    </PrivateRoute>
  );
}

export default Dashboard;

function getDescription() {
  return `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi sequi, harum dolorem ullam adipisci optio architecto necessitatibus nesciunt ab soluta, quisquam natus cum provident amet officia fuga. Aspernatur, alias quasi?`;
}
