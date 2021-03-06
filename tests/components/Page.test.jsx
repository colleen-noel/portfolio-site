import React from 'react'
import { describe, it } from 'mocha'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Page from '../../components/Page'


describe('Components - Page', () => {
  it('displays the children within the Page styled element', () => {
    const wrapper = shallow(<Page><span>This is a Test</span></Page>)

    expect(wrapper.find('span')).to.have.length(1)
    expect(wrapper.find('span').text()).to.equal('This is a Test')
  })
})
