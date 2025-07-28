import { useState } from 'react';

import Sidebar from './components/Sidebar';
import Placeholder from './components/Placeholder';
import NewProject from './components/NewProject';

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectID: undefined, // neither adding a new nor have one selected.
    projects: [],
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
        projects: [...prevState.projects, projectData],
      };
    });
  }

  let mainContent;
  console.log(projectState);
  if (projectState.selectedProjectID === null) {
    mainContent = (
      <NewProject onCompleteAddProject={handleCompleteAddProject} />
    );
  } else if (projectState.selectedProjectID === undefined) {
    mainContent = <Placeholder onInitAddProject={handleInitAddProject} />;
  }
  return (
    <main className='h-screen my-8 flex gap-8'>
      <Sidebar onInitAddProject={handleInitAddProject} />
      {mainContent}
    </main>
  );
}

export default App;
