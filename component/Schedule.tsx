import { BackgroundImage, Grid, Container, Text, Image } from "@mantine/core";
import { useImperativeHandle, forwardRef, useRef } from "react";

type sectionProp = {
  backgroundImage: string;
  schedule: string;
  title: string;
  message: string;
};

const Schedule = forwardRef((props: sectionProp, ref) => {
  const { backgroundImage, schedule, title, message } = props;
  const compRef = useRef();
  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      compRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    },
  }));
  return;
  <div
    className="section"
    ref={compRef}
  >
    <div className="copy">
      <Container size="lg"></Container>
    </div>
    <BackgroundImage
      className="img"
      src={backgroundImage}
    />
    <div className="overlay" />{" "}
  </div>;
});

export default Schedule;
