import { InputSection } from "../components/NoteCreationComponent";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import store from "../redux/createStore";
import "../components/NoteCreationComponent.style.css"
import "../index.css"
import "../App.css"


export default {
  title: "Components/NotesCreation",
  component: InputSection,
} as ComponentMeta<typeof InputSection>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof InputSection> = () => (
  <Provider store={store}>
    <InputSection />
  </Provider>
);

export const Default = Template.bind({});
