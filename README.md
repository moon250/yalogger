# Yep, another logger 📜

Yalogger is a simple stdout logger. I was not satisfied by logging libraries I found, so I decided to write mine !

Note : Yalogger uses [colorette](https://www.npmjs.com/package/colorette) to make the output shiny

## Features :
 - Multiple levels
 - Colors
 - Custom levels
 - Logging strings, objects and arrays

## Default levels :
| Level   | Color      |
|---------|------------|
| Success | Green      |
| Info    | Blue       |
| Warn    | Yellow     |
| Error   | Bright red |
| Fatal   | Red        |
| Debug   | Magenta    |
| Log     | Cyan       |

## Usage :

```js
import { info, debug } from "@moon250/yalogger"

// XXXX/XX/XX  XX:XX:XX.XX | INFO - Logging some infos
info("Logging some infos")

// XXXX/XX/XX  XX:XX:XX.XX | DEBUG - {"users":[{"id":1,"username":"John"},{"id":2,"username":"Jane"}]}
debug({
  users: [ { id: 1, username: "John" }, { id: 2, username: "Jane" } ]
})
```

## Creating custom levels :

```ts
import { Log, dataLog } from "@moon250/yalogger";
import { black } from "colorette"

const custom: Log = (...data) => {
  dataLog(data, {
    name: "custom",
    color: black,
    bold: false, // Default value, not needed
    time: false // Disabling t****ime display
  })
}

// CUSTOM - I can use a custom log level !
custom("I can use a custom log level !") 
```