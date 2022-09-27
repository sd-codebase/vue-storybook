import Image from '../components/Image/Image.vue';
import imgSrc from './assets/robot.jpg';

export default {
  title: 'Components/Image',
  component: Image,
};

const Template = (args) => ({
  components: { Image },
  setup() {
    return { args };
  },
  template: '<Image v-bind="args" />',
});

export const LargeImage = Template.bind({});
LargeImage.args = {
  imgSrc,
  alt: 'My Image',
  size: 'large',
};

export const MediumImage = Template.bind({});
MediumImage.args = {
  imgSrc,
  alt: 'My Image',
  size: 'medium',
};

export const SmallImage = Template.bind({});
SmallImage.args = {
  imgSrc,
  alt: 'My Image',
  size: 'small',
};

export const TinyImage = Template.bind({});
TinyImage.args = {
  imgSrc,
  alt: 'My Image',
  size: 'tiny',
};