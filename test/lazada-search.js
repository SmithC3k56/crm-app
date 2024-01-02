
test('Search T-Shirt', async() => {
 expect.assertions(1);
 // Tìm khung search, gõ T-Shirt và bấm enter
 const searchBox = await page.$('#q');
 await searchBox.type('T-Shirt');
 await searchBox.press('Enter');

 // Chờ trang load xong, tìm các phần tử item và đếm nếu đủ 40
 await page.waitForNavigation();
 const products = await page.$$('div[data-qa-locator=product-item]');
 expect(products.length).toBe(40);
});