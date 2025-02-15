import React from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ImageCard from '../reusables/ImageCard';
import { TagColor } from '../types/TagColor';
import { MediaType } from '../types/MediaType';

export interface Project {
  title: string;
  image: string;
  mediaType: MediaType;
  tags: { name: string; color: TagColor }[];
  description: string;
}

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <Container maxWidth={false}>
      <Grid container spacing={0}>
        {projects.map((project, index) => (
          <Grid size={4}>
            <ImageCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
