import MyText from '../components/Text.vue';

export default {
  title: 'Example/Text',
  component: MyText,
};

const Template = (args) => ({
  components: { MyText },
  setup() {
    return { args };
  },
  template: '<my-text v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  size: 'medium',
  variant: 'red',
  text: 'Red Text'
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'large',
  variant: 'blue',
  text: 'Blue Text'
};
