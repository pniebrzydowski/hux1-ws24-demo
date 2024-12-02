import { mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'

test('should render the appropriate heading', () => {
  const wrapper = mount(HelloWorld)
  expect(wrapper.get('h1').text()).toEqual('Sudoku')
})
