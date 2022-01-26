// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import React, { useEffect, useState } from "react";
// import Place from "../Place/Place";

// const Places = () => {
//   const [locations, setLocation] = useState([]);
//   useEffect(() => {
//     fetch("./location.json")
//       .then((res) => res.json())
//       .then((data) => setLocation);
//   }, []);

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid
//         container
//         spacing={{ xs: 2, md: 3 }}
//         columns={{ xs: 4, sm: 8, md: 12 }}
//       >
//         {locations.map((location) => (
//           <Place key={location.id} location={location}></Place>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Places;

import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import { experimentalStyled as styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import Place from "../Place/Place";

const Places = () => {
  // const Item = styled(Paper)(({ theme }) => ({
  //   ...theme.typography.body2,
  //   padding: theme.spacing(2),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  // }));
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    fetch("./location.json")
      .then((res) => res.json())
      .then((data) => setLocations(data));
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {/* {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>xs=2</Item>
          </Grid>
        ))} */}
          {locations.map((location) => (
            <Place key={location.id} location={location}></Place>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Places;
