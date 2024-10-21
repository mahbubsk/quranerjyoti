import React from "react";
// import { Box, Paper } from "@mui/material";
import Grid from '@mui/material/Grid2';
// import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
// import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom";
const Post = (props) => {
  const posts = props.posts
  return (
    <>
      {
        posts.map((post) => {
          return <Grid key={post.id} sx={{ boxShadow: 1 }} item size={4} >
            <CardContent>
              <h2 >
                {post.title.rendered}..
              </h2>

              <p style={{ textAlign: "justify", maxHeight: "220px", overflow: 'hidden' }} dangerouslySetInnerHTML={{ __html: post.content.rendered }}>
                {/* {post.content.rendered} */}
              </p>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <NavLink to={`/postDetails/${post.id}`}>আরও জানুন</NavLink>
            </CardActions>
          </Grid>
        })
      }

    </>
  );
}

export default Post;