import Button from "./Button.jsx";

export default function Sidebar({
  onInitAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  function getCategoryColor(cat) {
    let color;
    switch (cat) {
      case "dev":
        color = "purple";
        break;
      case "craft":
        color = "red";
        break;
      case "home":
        color = "yellow";
        break;
      case "other":
        color = "mint";
      default:
        color = "white";
    }
    return color;
  }

  const projectListItems = projects.map((proj) => {
    const categoryColor = getCategoryColor(proj.category);
    let classes =
      "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
    if (proj.id === selectedProjectId) {
      classes += " bg-stone-800 text-stone-200";
    } else {
      classes += " text-stone-400";
    }

    return (
      <li key={proj.id} className="my-4 flex">
        <button
          className={classes}
          onClick={() => onSelectProject(proj.id)}
        >
          <span className={`category-key ${categoryColor}`} />
          {proj.title}
        </button>
      </li>
    );
  });

  return (
    <aside className="w-1/3 rounded-r-xl bg-stone-900 px-8 py-16 text-stone-50 md:w-72">
      <h2 className="mb-8 font-bold uppercase text-stone-200 md:text-xl">
        My Projects
      </h2>
      <div>
        <Button onClick={onInitAddProject}>Add a project</Button>
        <ul className="mt-8">{projectListItems}</ul>
      </div>
    </aside>
  );
}
