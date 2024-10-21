import React from "react";
import Grid from '@mui/material/Grid2';
import Skeleton from '@mui/material/Skeleton';



const LoadingPost = () => {
        return (
                <Grid container spacing={2}>
                        <Grid sx={{ boxShadow: 1 }} item size={4} xs={12} sm={6} md={3}>
                                <Skeleton variant="rectangular" height={118} animation="wave" />
                                <Skeleton />
                                <Skeleton sx={{ textAlign: "center" }} width="60%" />
                        </Grid>
                        <Grid sx={{ boxShadow: 1 }} item size={4} xs={12} sm={6} md={3}>
                                <Skeleton variant="rectangular" height={118} animation="wave" />
                                <Skeleton />
                                <Skeleton sx={{ textAlign: "center" }} width="60%" />
                        </Grid>
                        <Grid sx={{ boxShadow: 1 }} item size={4} xs={12} sm={6} md={3}>
                                <Skeleton variant="rectangular" height={118} animation="wave" />
                                <Skeleton />
                                <Skeleton sx={{ display: "block" }} width="60%" />
                        </Grid>
                </Grid>
        );
}

export default LoadingPost;