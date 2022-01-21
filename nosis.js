const puppeteer = require('puppeteer');
const CUIT="30707966013";
(async ()=>{
const browser = await puppeteer.launch({ headless: false });
const page = await browser.newPage()
await page.goto('https://usuarios.nosis.com/es');
const email= await page.waitForSelector("#Email")
const clave= await page.waitForSelector("#Clave")
const btnLogin = await page.waitForSelector("#frmInicioSesion > div > div > div:nth-child(2) > div:nth-child(2) > button")
await page.type("#Email","")
await page.type("#Clave","")
await btnLogin.click()
await page.waitForTimeout(3000)
await page.goto("https://sac32.nosis.com/net/manager")
const documentoNro = await page.waitForSelector("#arbol > li > div > div.doc-nom > input.documento")
await page.type("#arbol > li > div > div.doc-nom > input.documento",CUIT)
await page.keyboard.press("Enter")
await page.waitForTimeout(1000)
const btnConsultar = await page.waitForSelector("#btnConsultar > a > b")
// await btnConsultar.click()
//TODO: continuar con la descarga del pdf y el seguimiento del cliente
})()