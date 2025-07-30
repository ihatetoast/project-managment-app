import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Placeholder from "./components/Placeholder";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectID: undefined, // neither adding a new nor have one selected.
    projects: [],
    tasks: [],
  });

  function handleInitAddProject() {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectID: null };
    });
  }

  function handleCompleteAddProject(projectData) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: [...prevState.projects, projectData],
      };
    });
  }

  function handleCancel() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: undefined,
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectID: id };
    });
  }

  function handleDeleteSelectedProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: prevState.projects.filter(
          (proj) => proj.id !== prevState.selectedProjectID,
        ),
      };
    });
  }

  function handleAddTask(taskValue) {
    const taskId = Math.ceil(Math.random() * 100);

    setProjectState((prevState) => {
      const newTaskData = {
        id: taskId,
        text: taskValue,
        projectId: prevState.selectedProjectID,
      };
      return {
        ...prevState,
        tasks: [newTaskData, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(
          (task) => task.id !== id,
        ),
      };
    });
  }

  const selectedProject = projectState.projects.find(
    (proj) => proj.id === projectState.selectedProjectID,
  );
  let mainContent = (
    <SelectedProject
      project={selectedProject}
      tasks={projectState.tasks}
      onDelete={handleDeleteSelectedProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
    />
  );

  if (projectState.selectedProjectID === null) {
    mainContent = (
      <NewProject
        onCompleteAddProject={handleCompleteAddProject}
        onCancel={handleCancel}
      />
    );
  } else if (projectState.selectedProjectID === undefined) {
    mainContent = <Placeholder onInitAddProject={handleInitAddProject} />;
  }

  return (
    <main className="my-8 flex h-screen gap-8">
      <Sidebar
        onInitAddProject={handleInitAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProjectID}
      />
      {mainContent}
    </main>
  );
}

export default App;
