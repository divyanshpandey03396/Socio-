import React from 'react'
import { useQuery } from "@apollo/client";
import { FETCH_POSTS_QUERY } from "../util/graphql";
import { Grid, Transition } from "semantic-ui-react";
import PostCard from '../components/PostCard';

function Home() {
  const {loading,data}=useQuery(FETCH_POSTS_QUERY);
  let posts = null;
  if (data) posts = data.getPosts;
  console.log(data);

  return (
    <Grid columns={2}>
      <Grid.Row className="page-title">
        <h1>Recent posts</h1>
      </Grid.Row>
      <Grid.Row>
        {/* {userData && (
          <Grid.Column>
            <PostForm />
          </Grid.Column>
        )} */}
        {loading ? (
          <h1>Loading posts...</h1>
        ) : (
          <Transition.Group>
            {posts &&
              posts.map((post) => (
                <Grid.Column key={post.id} style={{ marginBottom: "20px" }}>
                  <PostCard post={post} />
                </Grid.Column>
              ))}
          </Transition.Group>
        )}
      </Grid.Row>
    </Grid>
  );
};

export default Home