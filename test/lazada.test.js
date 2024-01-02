let puppeteer = require('puppeteer');
let browser = null;
let page = null;

describe('Lazada test', () => {

    // Code này được chạy khi bắt đầu chạy unit test
    beforeAll(async() => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.setViewport({
            width: 1280,
            height: 720
        });
      
        // Mặc định, timeout của jest là 5s. 
        // Vì web load có thể lâu nên ta tăng lên thành 60s.
        jest.setTimeout(60000);
    });

    // Đóng trình duyệt sau khi đã chạy xong các test case
    afterAll(async() => {
        await browser.close();
    });

    // Trước khi chạy mỗi test case, vào trang chủ của lazada
    beforeEach(async() => {
        await page.goto('https://lazada.vn&#39;);
    });

})