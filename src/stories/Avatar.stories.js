import Avatar from '../components/Avatar/Avatar.vue';
import imgSrc from './assets/robot.jpg';

const user = {imgSrc, name: 'Krishna'};

export default {
  title: 'Components/Avatar',
  component: Avatar,
};

const Template = (args) => ({
  components: { Avatar },
  setup() {
    return { args };
  },
  template: '<Avatar v-bind="args" />',
});

export const LargePurpleImage = Template.bind({});
LargePurpleImage.args = {
  user,
  variant: 'purple',
  size: 'large',
};

export const MediumPurpleImage = Template.bind({});
MediumPurpleImage.args = {
  user,
  variant: 'purple',
  size: 'medium',
};

export const SmallPurpleImage = Template.bind({});
SmallPurpleImage.args = {
  user,
  variant: 'purple',
  size: 'small',
};

export const TinyPurpleImage = Template.bind({});
TinyPurpleImage.args = {
  user,
  variant: 'purple',
  size: 'tiny',
};
