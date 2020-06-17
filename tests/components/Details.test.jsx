import React from 'react'
import { describe, it } from 'mocha'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Details from '../../components/Details'

describe('Components - Details', () => {
  it('displays the name, description, gitHub link, applications used, and picture of the selected project', () => {
    const project = {
      name: 'Test', description: 'my project', gitHubLink: 'link', apps: '["some apps"]', pictureName: 'image',
    }
    const wrapper = shallow(<Details project={project} />)

    const div = wrapper.find('div')
    const ul = wrapper.find('ul')


    expect(wrapper.find('h2').text()).to.equal('Test')
    expect(div.at(0).text()).to.equal('my project')
    expect(div.at(1).text()).to.equal('link')
    expect(ul.find('li').text()).to.equal('some apps')
    expect(div.at(2).find('img').prop('src')).to.equal('image')
  })
})
