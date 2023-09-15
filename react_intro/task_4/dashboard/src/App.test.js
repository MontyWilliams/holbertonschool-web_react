import { shallow } from 'enzyme'
import App from './App'

describe('App component', () => {
  it('should load without breaking', () => {
    shallow(<App />)
  })

  it('should have a header class named App-header', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('header.App-header')).toHaveLength(1)
  })

  it('should have a body class named App-body', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('body.App-body')).toHaveLength(1)
  })

  it('should have a footer class named App-footer', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('footer.App-footer')).toHaveLength(1)
  })
})
