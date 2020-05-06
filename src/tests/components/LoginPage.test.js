import React from 'react';
import { shallow } from 'enzyme' ;
import { LoginPage } from '../../components/LoginPage'
test('Should render LoginPage',() => {
    const wrapper = shallow(LoginPage);
    expect(wrapper).toMatchSnapshot();
})

test('should call start login on button click',() =>{
    const startLoin = jest.fn();
    const wrapper = shallow(<LoginPage startLogout ={startLogin}/>);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
})