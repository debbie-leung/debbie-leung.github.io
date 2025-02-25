import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid2';
import ImageCard from '../reusables/ImageCard';
import { MediaType } from '../enums/MediaType';
import { TagProps } from '../reusables/Tag';

export interface Project {
  title: string;
  media: string[];
  mediaType: MediaType;
  mediaLink?: string;
  tags: TagProps[];
  description: string;
}

interface ProjectProps {
  projects: Project[];
  selectedFilters: TagProps[];
}

const Projects = ({ projects, selectedFilters }: ProjectProps) => {
  const [selectedProjects, setSelectedProjects] = useState<Project[]>(projects);

  useEffect(() => {
    if (selectedFilters.length > 0) {
      setSelectedProjects(projects.filter(project => selectedFilters.some(filter => project.tags.some(tag => tag.name === filter.name))));
    } else {
      setSelectedProjects(projects);
    }
  }, [projects, selectedFilters]);

  return (
    <Grid container spacing={3}>
      {selectedProjects.map((project, index) => (
        <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
          <ImageCard {...project} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;
