const puppeteer = require('puppeteer');
const selectorCodigoMastellone="#ctl00_ucLeft_WebUsersLogin1_login_UserName"
const selectorClaveMastellone="#ctl00_ucLeft_WebUsersLogin1_login_Password"
const selectorIngresarMastellone="#ctl00_ucLeft_WebUsersLogin1_login_LoginButton";
const selectorIngresarDocumentos="#ctl00_ucLeft_AIncorporarDe"
const selectorPrimerArchivo="#ctl00_phBody_fup"
const clave= "";
(async () => {
    //con headless false se puede ver la ventana
    const browser = await puppeteer.launch({ headless: false });
//   const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.sip-laserenisima.com.ar/(S(cg1bmlr0khkeiq2pc22vcv3z))/Default.aspx');

      await page.waitForSelector(selectorCodigoMastellone)
      await page.waitForSelector(selectorClaveMastellone)
      const btn= await page.waitForSelector(selectorIngresarMastellone)
      await page.type(selectorCodigoMastellone,"30707966013");
      await page.type(selectorClaveMastellone,clave);
      await btn.click()
      page.on('dialog', async (dialog) => {
        // console.log(dialog.message());
        await dialog.accept();
        // await browser.close();
      });
      const btnIngresarDocumento = await page.waitForSelector(selectorIngresarDocumentos)
      await btnIngresarDocumento.click()
  
      const btnSubirDocumento = await page.waitForSelector(selectorPrimerArchivo)
    //   await btnSubirDocumento.click()
      const [filechooser] = await Promise.all([
          page.waitForFileChooser(),
          btnSubirDocumento.click()
        ])
    await filechooser.accept(["C:/Develop/CodibaSharp/PDF/autorizacion.pdf"])
        //   await page.click(selectorIngresarMastellone)

  await page.screenshot({ path: './example.png' });
  await browser.close();

})();
