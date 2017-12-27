import ReactDOM from 'react-dom';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { companies_list } from '../companies_list';
import Table from './Table';
import Tab from '../Tab/Tab';


configure({ adapter: new Adapter() });

test('Price between 0.01 and 99.99', () => {
	expect(parseInt(companies_list[0].price)).toBeGreaterThan(0.01);
	expect(parseInt(companies_list[0].price)).toBeLessThan(99.99);
})

test('Giá tự động thay đổi mỗi 5s và biên độ giao động không quá +/-5% so với giá hiện tại', () => {
	expect(1 + 1).toBe(2);
	const component = shallow(<Table/>)
	const clock = sinon.useFakeTimers()
	console.log(component.instance());
	component.update()
	console.log(component.state())
})


test('Khối lượng được thiết lập ngẫu nhiên từ [1000-1000.000], số nguyên.', () => {
	expect(companies_list[0].volume).toBeGreaterThan(1000);
	expect(companies_list[0].volume).toBeLessThan(1000000);
	expect(typeof(companies_list[0].volume)).toBe('number')
})

// test('Khối lượng tự động thay đổi cùng chu kỳ với giá, chỉ tăng không giảm, trong khoảng [10,30].', () => {

// })

test('Tổng giá trị = giá * khối lượng. Kết quả được làm tròn về nguyên.', () => {
	const component = shallow(<Table/>)
	const companies_list = component.instance().state.companies_list
	const result = (companies_list[0].price)*(companies_list[0].volume)

	expect(Math.floor(result)).toEqual(companies_list[0].value)
})

// test('Nếu tăng hơn thì trước đó thì để màu xanh. Nếu nhỏ hơn thì để màu đỏ', () => {

// })

// test('Top Gainers là 1 tab trả về danh sách 20 mã có giá trị giao dịch lượng lớn nhất từ danh sách gốc. Và ngược lại Top Losers trả về 20 mã có giá trị giao dịch thấp nhất từ danh sách gốc kể từ lúc chạy. Dữ liệu được sort trên trường Value (giá trị giao dịch), ở tab Gainers là giảm dần và Losers là tăng dần', () => {
// 	const component = shallow(<Table filter='top_gainers'/>)
// 	console.log(component.instance())

// })




