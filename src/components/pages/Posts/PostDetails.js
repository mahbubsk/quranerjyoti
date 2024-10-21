import React, { useEffect, useState } from "react";
// import { Box, Paper } from "@mui/material";
import Grid from '@mui/material/Grid2';
// import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { NavLink, useParams } from "react-router-dom";
import Navbar from '../../Navbar/Navbar'
// import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Container } from "@mui/material";

const Post = () => {
  const { id } = useParams();
  const [postDetais, setPostDetails] = useState({});
  useEffect(() => {
    // axios
    let url = `${process.env.REACT_APP_API_ROOT}/posts/${id}`;
    axios.get(url).then(res => {
      console.log(res);
      setPostDetails(res);
    }).catch(err => {
      console.log(err)
      setPostDetails(err)
    });
  }, []);
  return (
    <>
      <Grid sx={{ boxShadow: 1 }} item size={4} >
        <Navbar />
        <CardContent>
          {Object.keys(postDetais).length ? (
            <div>
              <h2>{postDetais.data.title.rendered}</h2>
              <Container sx={{textAlign:"justify"}} dangerouslySetInnerHTML={{ __html:  postDetais.data.content.rendered}}></Container>
              {/* {postDetais.data} */}
              
            </div>
          ) : (
            <h1>
              loading...
            </h1>
          )}
        </CardContent>
      </Grid>
    </>
  );
}

export default Post;