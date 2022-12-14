import { Note } from "../models/note.model";

export function getInitialNote(): Note[] {
  return [
    {
      id: Math.random(),
      title: "Shopping list",
      content: "Tomatoes, bread",
      category: "Task",
      date_created: new Date().toLocaleDateString(),
      dates: "",
      archived: false,
    },
    {
      id: Math.random(),
      title: "The theory of evolution",
      content: "The evolution",
      category: "Random Thought",
      date_created: new Date().toLocaleDateString(),
      dates: "",
      archived: false,
    },
    {
      id: Math.random(),
      title: "New feature",
      content: "Implement new class",
      category: "Idea",
      date_created: new Date().toLocaleDateString(),
      dates: "3/5/2022,5/5/2022",
      archived: false,
    },
    {
      id: Math.random(),
      title: "William Gaddis",
      content: "Power doesn`t come",
      category: "Random Thought",
      date_created: new Date().toLocaleDateString(),
      dates: "",
      archived: false,
    },
    {
      id: Math.random(),
      title: "Search new car",
      content: "Choice new car in car dealership",
      category: "Task",
      date_created: new Date().toLocaleDateString(),
      dates: "",
      archived: false,
    },
    {
      id: Math.random(),
      title: "Books",
      content: "The Learn Startup",
      category: "Task",
      date_created: new Date().toLocaleDateString(),
      dates: "",
      archived: false,
    },
    {
      id: Math.random(),
      title: "Usyk vs Joshua",
      content: "Invite friends and by crisp",
      category: "Task",
      date_created: new Date().toLocaleDateString(),
      dates: "",
      archived: false,
    },
  ];
}
