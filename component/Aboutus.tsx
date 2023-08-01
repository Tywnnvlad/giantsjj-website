import {
  BackgroundImage,
  Grid,
  Container,
  Text,
  Image,
  Center,
} from "@mantine/core";
import { useImperativeHandle, forwardRef, useRef } from "react";

type sectionProp = {
  backgroundImage: string;
  title: string;
  message: string;
  pic1: string;
  pic2: string;
  about1: string;
  about2: string;
};

// type smallText = {
//   text: string;
// };

// const smallText = (props: smallText) => {
//   return (
//     <Text
//       size="2rem"
//       color="giantsjj.1"
//     >
//       {smallText}
//     </Text>
//   );
// };

const Aboutus = forwardRef((props: sectionProp, ref) => {
  const { backgroundImage, title, message, pic1, pic2, about1, about2 } = props;
  const compRef = useRef();
  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      compRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    },
  }));
  return (
    <div
      className="section"
      ref={compRef}
    >
      <div className="copy">
        <Container size="md">
          <Grid
            grow
            justify="center"
          >
            <Grid.Col sm={12}>
              <Text
                size="2rem"
                color="giantsjj.1"
              >
                {title}
              </Text>
            </Grid.Col>
            <Grid.Col sm={12}>
              <Text
                size="0.9rem"
                color="giantsjj.1"
              >
                {message}
              </Text>
            </Grid.Col>
            <Grid.Col
              span="content"
              //   sm={6}
            >
              <center>
                <Image
                  src={pic1}
                  width={"12rem"}
                />
              </center>
            </Grid.Col>
            <Grid.Col sm={6}>
              <Text
                size="1.2rem"
                color="giantsjj.1"
              >
                {about1}
              </Text>
            </Grid.Col>
            <Grid.Col sm={6}>
              <Text
                size="1.2rem"
                color="giantsjj.1"
              >
                {about2}
              </Text>
            </Grid.Col>
            <Grid.Col
              span="content"
              //   sm={6}
            >
              <center>
                <Image
                  src={pic2}
                  width={"12rem"}
                />
              </center>
            </Grid.Col>
          </Grid>
        </Container>
      </div>
      <BackgroundImage
        className="img"
        src={backgroundImage}
      />
      <div className="overlay" />{" "}
    </div>
  );
});

export default Aboutus;
