/**
 * @vitest-environment happy-dom
 */
import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { findInWrapper } from '@/utils/test-utils/find-in-wrapper';
//@ts-ignore
import Image from './Image.vue';
import imgSrc from '../../assets/logo.svg';

test('should render', () => {
  const wrapper = mount(Image, {
    propsData:{
      imgSrc,
      alt: 'My Image'
    }
  });
  const {ByTestId} = findInWrapper(wrapper); 
  const container = ByTestId('image-container');
  const image = ByTestId('image');

  expect(container.exists()).toBeTruthy();
  expect(image.exists()).toBeTruthy();

  expect(container.classes('medium')).toBe(true);
  expect(image.attributes('src')).toBe(imgSrc);
  expect(image.attributes('alt')).toBe('My Image');

})

