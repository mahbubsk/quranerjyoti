import { useEffect, useState } from "react";
import axios from 'axios';
import Post from './Post';
import Navbar from '../../Navbar/Navbar'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid2';
import LoadingPost from "./Loading";
import './index.css'


const Posts = () => {
    // const postGet = [];
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        let url = `${process.env.REACT_APP_API_ROOT}/posts`;
        const postGet = axios.get(url)
        .then((res)=>{
            setPosts(res.data);
            setLoading(false);
        })
        .catch((error)=>{
            setPosts("Data not found!")
        })

    },[])
    // console.log(loading)

    // console.log('Posts : ', posts)
    return ( 
        <>
            <Container maxWidth="lg" sx={{marginTop: 5}}>
                <Navbar/>
                {
                    loading && 
                    (   
                        
                        <LoadingPost/>
                    )

                }
                {  
                    <>
                        <hr/>
                        <h1 >সকল প্রশ্ন একত্রে</h1>
                        <Grid container spacing={2} md={3} xs={12} sm={6} >
                            
                            <Post posts={posts}/>
                        </Grid> 
                    </>
                     
                }
                 
            </Container>
        </>
     );
}
 
export default Posts;