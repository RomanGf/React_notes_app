import {NoteList} from "../components/NoteListComponent"
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from "react-redux";
import store from "../redux/createStore";
import { getInitialNote } from "../utils/initialStateUtils"
import "../components/NoteListComponent.styles.css"
import "../index.css"


export default {
  
  title: 'Components/NoteList',
  component: NoteList,
} as ComponentMeta<typeof NoteList>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof NoteList> = (args) => <Provider store={store}><NoteList {...args} /></Provider>;

export const Default = Template.bind({});

Default.args = {
    notes: getInitialNote()
};