import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Header } from '../../components/Header';

/*
test("should render Header correctly",() => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    console.log(renderer.getRenderOutput());
});


// explore to Match snapshot

test("should render Header correctly",() => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').length).toBe(1);
    /*
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
    
});

test("should render Header h1 text value correctly",() => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').text()).toBe("Expensify");
});
*/
test("should call start logout on button click", () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout ={startLogout}/>);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});

test('should match snapshot',() =>{
    const wrapper = shallow(<Header startLogout ={() => { }}/>);
    // we have to install enzyme-to-json to return the 
    // snapshot look to more simple one easier to track issues
    expect(toJSON(wrapper)).toMatchSnapshot();
})
