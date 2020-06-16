import React from 'react'
import { describe, it } from 'mocha'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Details from '../../components/Details'

describe('Components - Details', () => {
  it.only('displays the name, description, gitHub link, applications used, and picture of the selected project', () => {
    const project = {
      name: 'Test', description: 'my project', gitHibLink: 'link', apps: '["some apps"]', pictureName: 'img src',
    }
    const wrapper = shallow(<Details project={project} />)

    expect(wrapper.text()).to.equal('Test my project link some apps img src')
  })
})
