import React from "react";
import { Grid, Card, CardActions, CardContent, CardMedia, Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { add } from '../redux/bookSlice';
import { Movies } from '../Movie';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const bookTicket = (item) => {
        dispatch(add(item));
        navigate('/book-ticket');
    };

    return (
        <>
            <Box container sx={{ flexGrow: 1 }}>
                <Grid item container spacing={3} direction={{ xs: 'column', md: 'row' }} mt={2}
                    alignItems="center"
                    justify="space-around"
                >
                    {Movies.map(movie => (
                        <Grid item lg={3} xs={12} s={12} md={3} key={movie.id}>
                            <Card
                                sx={{
                                    width: 300,
                                    boxShadow: "5px 5px 8px #fff",
                                    transition: "box-shadow 0.3s",
                                    ":hover": {
                                        boxShadow: "10px 10px 20px #ccc",
                                    },
                                }}
                            >
                                <CardMedia
                                    sx={{ height: 350 }}
                                    image={movie.image}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" color="darkblue">
                                        {movie.name}
                                    </Typography>
                                    <Typography variant="body2" color="black">
                                        {movie.starring}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        onClick={() => bookTicket(movie)}
                                        sx={{
                                            color: 'white',
                                            backgroundImage: 'linear-gradient(to right top, #5c10f2, #6c0fd6, #7214bc, #731ca4, #70238d)',
                                            width: 300,
                                            ':hover': {
                                                bgcolor: 'yellow',
                                                color: 'white',
                                            },
                                            fontFamily: 'Poppins, sans-serif',
                                        }}
                                    >
                                        BOOK TICKET
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
};

export default Home;
