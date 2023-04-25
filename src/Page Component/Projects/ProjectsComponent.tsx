import React from "react";

const ProjectsComponent = (props: { projectContent: React.ReactElement }) => {
  const { projectContent } = props;
  return (
    <div
      id="projects"
      className="md:w-full md:min-h-[100vh] gap-10 sm:gap-x-20 py-[6rem] md:px-5 flex-col flex flex-wrap md:flex  md:flex-row  justify-center items-center overflow-hidden">
      <p className="h-20 w-full relative flex justify-center items-center px-10 lg:top-5 top-14">
        <span className="capitalize text-4xl font-[600]">Work experience & personal projects</span>
      </p>
      {projectContent}
    </div>
  );
};

export default ProjectsComponent;
