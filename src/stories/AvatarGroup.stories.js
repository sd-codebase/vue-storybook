import imgSrc from './assets/robot.jpg';
import AvatarGroup from '../components/AvatarGroup/AvatarGroup.vue';

const users = [{imgSrc, name: 'Krishna'}, {name: 'Krishna'}, {imgSrc, name: 'Krishna'}, {imgSrc, name: 'Krishna'}];

export default {
  title: 'Components/AvatarGroup',
  component: AvatarGroup,
};

const Template = (args) => ({
  components: { AvatarGroup },
  setup() {
    return { args };
  },
  template: '<AvatarGroup v-bind="args" />',
});

export const LargePurpleImage = Template.bind({});
LargePurpleImage.args = {
  users,
  variant: 'purple',
  size: 'large',
};

export const MediumPurpleImage = Template.bind({});
MediumPurpleImage.args = {
  users,
  variant: 'purple',
  size: 'medium',
};

export const SmallPurpleImage = Template.bind({});
SmallPurpleImage.args = {
  users,
  variant: 'purple',
  size: 'small',
};

export const TinyPurpleImage = Template.bind({});
TinyPurpleImage.args = {
  users,
  variant: 'purple',
  size: 'tiny',
};
