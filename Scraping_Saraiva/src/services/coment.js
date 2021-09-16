const puppeteer = require('puppeteer');

module.exports = {
  Robo: async function (livro) {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
      width: 1385,
      height: 720
    });
    await page.goto('https://www.saraiva.com.br/livros', {
      waitUntil: 'networkidle2'
    });

    var input = await page.evaluateHandle(() => {
      let shadow = document.querySelector('linx-impulse-autocomplete').shadowRoot
      return shadow.querySelector('input.search-input');
    });

    await input.type(`${livro}`);
    await page.keyboard.press('Enter');

    await page.waitForSelector('a[class="nm-product-name"]', {
      visible: true
    });

    var link = await page.$$eval('a[class="nm-product-name"]', link_list => link_list.map(a => a.href));

    await page.goto(link[0], {
      waitUntil: 'networkidle2'
    });

    await page.waitForTimeout(1000);

    try {
      await (await page.click('button[class="button-main see-more-button"]'));
    } catch {
    }

    var nomes = await (await page.$$eval('div[class="name"]', nomes_list => nomes_list.map(div => div.innerText)));
    var tipos = await (await page.$$eval('p[class="ctx--text"] > strong', tipos_list => tipos_list.map(strong => strong.innerText)));
    var data = await (await page.$$eval('p[class="ctx--text"] > a', tipos_list => tipos_list.map(a => a.innerText)));
    var desc = await (await page.$$eval('div[class="ctx-row description"]', desc_list => desc_list.map(div => div.innerText)));

    var comentario1 = `Nome: ${nomes[0]}, Descrição: ${tipos[0]}, Data: ${data[0]}, Comentario: ${desc[0]}`
    var comentario2 = `Nome: ${nomes[1]}, Descrição: ${tipos[1]}, Data: ${data[1]}, Comentario: ${desc[1]}`
    var comentario3 = `Nome: ${nomes[2]}, Descrição: ${tipos[2]}, Data: ${data[2]}, Comentario: ${desc[2]}`

    await browser.close();

    return {
      comentario1,
      comentario2,
      comentario3
    }
  }
}