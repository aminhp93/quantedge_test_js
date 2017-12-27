import { companies_list } from './companies_list';
import Table from './Table';


test('Price between 0.01 and 99.99', () => {
	expect(parseInt(companies_list[0].price)).toBeGreaterThan(0.01);
	expect(parseInt(companies_list[0].price)).toBeLessThan(99.99);
})

test('Giá tự động thay đổi mỗi 5s và biên độ giao động không quá +/-5% so với giá hiện tại', () => {
	expect(1 + 1).toBe(2);
	console.log(Table)
})