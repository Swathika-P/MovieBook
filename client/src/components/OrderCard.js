import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function OrderCard({
  name,
  seat,
  username,
  img,
  total,
  time,
  id,
  isUser,
}) {
  return (
    <>
      <Card
        style={{
          backgroundImage:
            "linear-gradient(to left bottom, #3d10f2, #bf00bf, #f10087, #ff0053, #fe0c24)",
        }}
        sx={{
          width: "59%",
          margin: "auto",
          mt: 2,
          padding: 2,
          boxShadow: "5px 5px 10px #ccc",
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
          },
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={2}>
            <CardMedia component="img" height="100%" image={img} alt="Paella dish" />
          </Grid>
          <Grid item xs={12} md={8}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h5" sx={{ color: "violet" }}>
                    Name : {name}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" sx={{ color: "violet" }}>
                    Time : {time}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" sx={{ color: "violet" }}>
                    Seat : {seat}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" sx={{ color: "violet" }}>
                    Total : Rs. {total}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
