import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { describe, it } from 'mocha'
import NotFound from '../../components/NotFound'

describe('Components - NotFound', () => {
  it('sends an error message if the page is not found', () => {
    const wrapper = shallow(<NotFound message="My Test Message" />)

    expect(wrapper.find('NotFound__Message').text()).to.equal('My Test Message')
  })
})
