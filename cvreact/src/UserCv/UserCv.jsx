import React, { Component } from 'react'
 import PersonalInfo from '../PersonalInfo/PersonalInfo'
 import Experience from '../Experience/Experience'
 import Contacts from '../Contacts/Contacts'

export default class UserCv extends Component {
  render() {
    return (
      <div className='container'>
        <PersonalInfo/>
        <Experience/>
        <Contacts/>
      </div>
    )
  }
}
