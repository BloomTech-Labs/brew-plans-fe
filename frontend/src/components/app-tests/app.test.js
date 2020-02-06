import 'react-native';
import React from 'react';
import  FacebookLogin from '../UserForms/FacebookLogin';
import renderer from 'react-test-renderer';
jest.mock('../UserForms/FacebookLogin');




test('renders correctly', () => {
    let FacebookData= renderer.create(<FacebookLogin />).toJSON();
    expect(FacebookData).toMatchSnapshot();
})

