import { Modal } from "../components/ModalComponent";
import "../components/ModalComponent.style.css"
import "../index.css"
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import store from "../redux/createStore";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Modal> = (args) => (
  <Provider store={store}>
    <Modal {...args} />
  </Provider>
);

export const Primary = Template.bind({});

Primary.args = {
  note: {
    id: Math.random(),
    title: "Shopping list",
    content: "Tomatoes, bread",
    category: "Task",
    date_created: new Date().toLocaleDateString(),
    dates: "",
    archived: false,
  },
};
