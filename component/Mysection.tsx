import {
  ClassNames,
  Image,
  Skeleton,
  Text,
  BackgroundImage,
  Container,
  Grid,
} from "@mantine/core";
// import './Mysection.css';
import { useImperativeHandle, forwardRef, useRef } from "react";

//Proper way of passing and declaring props!
type sectionProp = {
  image: string;
  title: string;
};

const child = (
  <Skeleton
    height={100}
    radius="md"
    animate={false}
  />
);

const Mysection = forwardRef((props: sectionProp, ref) => {
  const { image, title } = props;
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
        <Container size="xl">
          <Grid
            grow
            style={{
              color: "white",
              fontSize: "1rem",
            }}
          >
            <Grid.Col sm={12}>
              <Text
                size="2.5rem"
                color="white"
              >
                {title}
              </Text>
            </Grid.Col>
            <Grid.Col xs={8}>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                dolores ipsam quaerat inventore laborum. Ad perspiciatis optio
                dolor dolorem quos. Eum quisquam harum accusamus, molestiae
                tempora nisi quo! Aut, asperiores?
              </Text>
            </Grid.Col>
            <Grid.Col xs={4}>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente rem totam ipsum.
              </Text>
            </Grid.Col>
            <Grid.Col xs={4}>{child}</Grid.Col>
            <Grid.Col xs={8}>{child}</Grid.Col>
            <Grid.Col xs={12}>
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63255.85673307466!2d98.73571668753556!3d7.737622723844234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304e20be764e3d0d%3A0xbf9db8781a549f71!2sPhi%20Phi%20Islands!5e0!3m2!1sen!2sca!4v1690263942518!5m2!1sen!2sca"
                width="350"
                height="300"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe> */}
            </Grid.Col>
          </Grid>
        </Container>
      </div>

      <BackgroundImage
        className="img"
        src={image}
      >
        {/* <Image
				className='img'
				src={image}
				// fit='fill'
			/> */}
      </BackgroundImage>
      <div className="overlay"></div>
    </div>
  );
});

export default Mysection;
