const puppeteer = require('puppeteer');

module.exports = {
	rodarRobo: async function(livro, categoria){
		const browser = await puppeteer.launch({
			headless: false
		});
		const page = await browser.newPage();
		await page.setViewport({
			width: 1385,
			height: 720
		});
		await page.goto('https://www.saraiva.com.br/', {
			waitUntil: 'networkidle2'
		});
	
	
		var input = await page.evaluateHandle(() => {
			let shadow = document.querySelector('linx-impulse-autocomplete').shadowRoot
			return shadow.querySelector('input.search-input');
		});
	
		await input.type(`${livro}`);
		await page.keyboard.press('Enter');
	
	
		await page.waitForSelector('select', {
			visible: true,
			timeout: 5000
		});
	
		if (categoria == 1) {
			await page.select('select', 'Mais Vendidos');
		} else if (categoria == 2) {
			await page.select('select', 'Maior Desconto');
		}
	
		await page.waitForTimeout(3000);
	
		var titulo = await (await page.$$eval('a[class="nm-product-name"]', title_list => title_list.map(a => a.innerText))).slice(0, 3);
		var preco = await (await page.$$eval('div[class="nm-price-container"]', price_list => price_list.map(div => div.innerText))).slice(0, 3);
	
		var livro1 = `Titulo: ${titulo[0]} | Preço: ${preco[0]}`;
		var livro2 = `Titulo: ${titulo[1]} | Preço: ${preco[1]}`;
		var livro3 = `Titulo: ${titulo[2]} | Preço: ${preco[2]}`;

		console.log('\n' + livro1 + '\n' + livro2 + '\n' + livro3);
		await browser.close();
		
		return {
			livro1, livro2, livro3
		}
	
	}
}