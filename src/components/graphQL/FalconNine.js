import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import {
  Backdrop,
  Box,
  Chip,
  Fade,
  Grid,
  Modal,
  Typography,
} from "@mui/material";

import FalconNineOne from "../../images/Falcon9One.jpg";
import FalconNineTwo from "../../images/Falcon9Two.jpg";
import FalconNineThree from "../../images/Falcon9Three.jpg";
import FalconNineFour from "../../images/Falcon9Four.jpg";
import FalconNineFive from "../../images/Falcon9Five.jpg";
import FalconNineSix from "../../images/Falcon9Six.jpg";
const GET_FALCON_NINE_INFO = gql`
  query ExampleQuery {
    rocket(id: "falcon9") {
      active
      boosters
      cost_per_launch
      country
      description
      id
      name
      stages
      success_rate_pct
      first_flight
    }
  }
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const GetFalconNineInfo = () => {
  const { loading, error, data } = useQuery(GET_FALCON_NINE_INFO);
  const [modalOne, setModalOne] = useState(false);
  const handleModalOneOpen = () => setModalOne(true);
  const handleModalOneClose = () => setModalOne(false);

  const [modalTwo, setModalTwo] = useState(false);
  const handleModalTwoOpen = () => setModalTwo(true);
  const handleModalTwoClose = () => setModalTwo(false);

  const [modalThree, setModalThree] = useState(false);
  const handleModalThreeOpen = () => setModalThree(true);
  const handleModalThreeClose = () => setModalThree(false);

  const [modalFour, setModalFour] = useState(false);
  const handleModalFourOpen = () => setModalFour(true);
  const handleModalFourClose = () => setModalFour(false);

  const [modalFive, setModalFive] = useState(false);
  const handleModalFiveOpen = () => setModalFive(true);
  const handleModalFiveClose = () => setModalFive(false);

  const [modalSix, setModalSix] = useState(false);
  const handleModalSixOpen = () => setModalSix(true);
  const handleModalSixClose = () => setModalSix(false);

  if (loading) return <></>;
  if (error) return "Error";
  const { rocket } = data;
  const {
    active,
    name,
    description,
    boosters,
    cost_per_launch,
    country,
    stages,
    success_rate_pct,
    first_flight,
  } = rocket;

  return (
    <>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography variant="h2">{name}</Typography>
        </Grid>
        <Grid item>
          {active ? (
            <Chip
              label="Active"
              color="success"
              size="medium"
              sx={{ mt: 2, mb: 2 }}
            />
          ) : (
            <Chip
              label="Inactive"
              color="error"
              size="medium"
              sx={{ mt: 2, mb: 2 }}
            />
          )}
        </Grid>
      </Grid>

      <Typography sx={{ mb: 5 }}>{description}</Typography>

      <Grid container spacing={1}>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              border: "1px solid black",
              height: "100%",
              position: "relative",
              cursor: "pointer"
            }}
            onClick={handleModalOneOpen}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                height: "100%",
                width: "100%",
                backgroundColor: "black",
                opacity: 0.5,
              }}
            ></Box>
            <Typography
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                color: "white",
                transform: "translate(-50%,0)",
              }}
            >
              Boosters
            </Typography>
            <img
              src={FalconNineOne}
              alt="Falcon 9 before launch"
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
          </Box>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={modalOne}
            onClose={handleModalOneClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={modalOne}>
              <Box sx={style}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Boosters:
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  {boosters}
                </Typography>
              </Box>
            </Fade>
          </Modal>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              border: "1px solid black",
              height: "100%",
              position: "relative",
              cursor: "pointer",
            }}
            onClick={handleModalTwoOpen}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                height: "100%",
                width: "100%",
                backgroundColor: "black",
                opacity: 0.5,
              }}
            ></Box>
            <Typography
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                color: "white",
                transform: "translate(-50%,0)",
              }}
            >
              Cost Per Launch
            </Typography>
            <img
              src={FalconNineTwo}
              alt="Falcon 9 before launch"
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
          </Box>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={modalTwo}
            onClose={handleModalTwoClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={modalTwo}>
              <Box sx={style}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Cost Per Launch
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  ${cost_per_launch}
                </Typography>
              </Box>
            </Fade>
          </Modal>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              border: "1px solid black",
              height: "100%",
              position: "relative",
              cursor: "pointer"
            }}
            onClick={handleModalThreeOpen}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                height: "100%",
                width: "100%",
                backgroundColor: "black",
                opacity: 0.5,
              }}
            ></Box>
            <Typography
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                color: "white",
                transform: "translate(-50%,0)",
              }}
            >
              Country
            </Typography>
            <img
              src={FalconNineThree}
              alt="Falcon 9 before launch"
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
          </Box>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={modalThree}
            onClose={handleModalThreeClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={modalThree}>
              <Box sx={style}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Country
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  {country}
                </Typography>
              </Box>
            </Fade>
          </Modal>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              border: "1px solid black",
              height: "100%",
              position: "relative",
              cursor: "pointer"
            }}
            onClick={handleModalFourOpen}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                height: "100%",
                width: "100%",
                backgroundColor: "black",
                opacity: 0.5,
              }}
            ></Box>
            <Typography
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                color: "white",
                transform: "translate(-50%,0)",
              }}
            >
              Stages
            </Typography>
            <img
              src={FalconNineFour}
              alt="Falcon 9 before launch"
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
          </Box>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={modalFour}
            onClose={handleModalFourClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={modalFour}>
              <Box sx={style}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Stages
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  {stages}
                </Typography>
              </Box>
            </Fade>
          </Modal>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              border: "1px solid black",
              height: "100%",
              position: "relative",
              cursor: "pointer"
            }}
            onClick={handleModalFiveOpen}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                height: "100%",
                width: "100%",
                backgroundColor: "black",
                opacity: 0.5,
              }}
            ></Box>
            <Typography
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                color: "white",
                transform: "translate(-50%,0)",
              }}
            >
              Success Rate
            </Typography>
            <img
              src={FalconNineFive}
              alt="Falcon 9 before launch"
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
          </Box>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={modalFive}
            onClose={handleModalFiveClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={modalFive}>
              <Box sx={style}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Success Rate
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  {success_rate_pct}%
                </Typography>
              </Box>
            </Fade>
          </Modal>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              border: "1px solid black",
              height: "100%",
              position: "relative",
              cursor: "pointer"
            }}
            onClick={handleModalSixOpen}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                height: "100%",
                width: "100%",
                backgroundColor: "black",
                opacity: 0.5,
              }}
            ></Box>
            <Typography
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                color: "white",
                transform: "translate(-50%,0)",
              }}
            >
              First Flight
            </Typography>
            <img
              src={FalconNineSix}
              alt="Falcon 9 before launch"
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
          </Box>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={modalSix}
            onClose={handleModalSixClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={modalSix}>
              <Box sx={style}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  First Flight
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  {first_flight}
                </Typography>
              </Box>
            </Fade>
          </Modal>
        </Grid>
      </Grid>
    </>
  );
};
