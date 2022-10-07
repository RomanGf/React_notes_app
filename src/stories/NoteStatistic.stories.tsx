import {NotesStatistic} from "../components/NotesStatisticComponent"
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from "react-redux";
import store from "../redux/createStore";
import { getInitialNote } from "../utils/initialStateUtils"
import "../components/NotesStatisticComponent.style.css"
import "../index.css"

export default {
  
  title: 'Components/NotesStatistic',
  component: NotesStatistic,
} as ComponentMeta<typeof NotesStatistic>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof NotesStatistic> = (args) => <Provider store={store}><NotesStatistic {...args} /></Provider>;

export const Default = Template.bind({});

Default.args = {
    notes: getInitialNote()
};