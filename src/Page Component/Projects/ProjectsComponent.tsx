import React from "react";

const ProjectsComponent = (props: { projectContent: React.ReactElement }) => {
  const { projectContent } = props;
  return (
    <div
      id="projects"
      className="md:w-full md:min-h-[100vh] gap-20 lg:gap-10 sm:gap-x-20 py-[3rem] md:px-5 flex-col flex flex-wrap md:flex  md:flex-row  justify-center items-center overflow-hidden">
      <p className="h-20 w-full relative flex flex-col md:flex-row justify-center items-center px-10 lg:top-5 top-14 capitalize text-4xl font-[600] gap-[1px] text-deep-blue dark:text-white">
        <span className="W-auto ">Work experience &nbsp;</span>
        <span>&</span>
        <span className="w-auto">&nbsp;personal projects</span>
      </p>
      {projectContent}
    </div>
  );
};

export default ProjectsComponent;
