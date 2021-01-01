import React from 'react';
import styled from 'styled-components';
import Project from './project';

const StyledProjects = styled.div`
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
`;

const Projects = ({ projectsData }) => (
  <>
    <h2>Projects</h2>
    <StyledProjects>
      {
                projectsData.map((p) => <Project key={p.title} project={p} />)
            }
    </StyledProjects>
  </>
);

export default Projects;
