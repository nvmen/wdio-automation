// @ts-ignore
import {shareConfig} from "./wdio.shared.conf.ts";

export const config: WebdriverIO.Config = {
    ...shareConfig,
    ...{
      capabilities: [
        {
          browserName: 'chrome',
          'wdio:devtoolsOptions': {
              headless: false
          }
        },
      // {
      //     browserName: 'firefox',
      //     'wdio:devtoolsOptions': {
      //         headless: false
      //     }
      // },
      ]
    }
}
