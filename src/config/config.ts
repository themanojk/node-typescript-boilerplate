import {configObj} from "../typescript_helpers/interfaces/config";
import {envValues} from "../typescript_helpers/type_aliases/config";

let env: envValues = <envValues | null>process.env.NODE_ENV || "development";

let config: configObj = {
    development:{
        auth_secret_key: "zHdguH0VPpPTJzCftRZelObX",
        port: 56645,
    },
    "staging":{
  
    },
    "production": (function makeStringifiedJsonAsJson() {
      let configObj: any = {};
      function convertToJson(value: any) {
          try {
              let tempVal = JSON.parse(value);
              return tempVal;
          }
          catch(err) {
              return value;
          }
      }
      for(let key in process.env) {
          configObj[key] = convertToJson(process.env[key]);
      }
      return configObj;
    }())
  }

  export default config[env];
