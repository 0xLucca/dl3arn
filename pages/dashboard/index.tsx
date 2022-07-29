import styled from "styled-components";

import Card from "@/components/Dashboard/Card";
import CardPlaceholder from "@/components/Placeholders/Card";
import PrivateRoute from "@/components/PrivateRoute";
import useCourses from "@/hooks/useCourses";
import Head from "next/head";
import { PrimaryButton } from "components/Buttons";
import createCourse from "services/firebase/store/createCourse";

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
  const {
    data: { courses, isLoading },
    refetch,
  } = useCourses();

  const handleCreation = async () => {
    await createCourse();
    refetch();
  };

  return (
    <PrivateRoute verified>
      <Head>
        <title>DL3arn | Dashboard</title>
      </Head>
      <Container>
        <main>
          <PrimaryButton onClick={handleCreation}>Test firestore</PrimaryButton>
          <section>
            <h2>courses</h2>
            <div className="cards">
              {Array.from({ length: 19 }).map((_, i) =>
                isLoading ? (
                  <CardPlaceholder key={i} />
                ) : (
                  courses[i] && (
                    <Card
                      key={i}
                      uid={courses[i].uid}
                      name={courses[i].name}
                      total_duration={courses[i].total_duration}
                      score={courses[i].score}
                      instructor={courses[i].instructor}
                      image={courses[i].image}
                      description={i === 0 ? getDescription() : undefined}
                    />
                  )
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
