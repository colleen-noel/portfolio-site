import React from 'react'
import { describe, it } from 'mocha'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Project from '../../components/Project'

describe('Components - Project', () => {
  it('displays the project as a link to their details page', () => {
    const wrapper = shallow(<Project id={1} name="Test" />)

    const NavLink = wrapper.find('NavLink')

    expect(NavLink.prop('to')).to.equal('/projects/1')
    expect(NavLink.text()).to.equal('Test')
  })
})
