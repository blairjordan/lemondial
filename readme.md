# Lemondial 🍋

With this device, you can experience the full range of Lemongrab's signature screeching at the twist of a dial.

To use the device, simply turn the dial to increase the intensity of the Lemongrab sound. The more you turn the dial, the more annoying and unbearable the sound will become, just like Lemongrab himself.

Please be advised that this device is intended for novelty purposes only and may cause extreme discomfort to those around you. Use at your own risk.

![lemon screenshot](https://github.com/blairjordan/lemondial/raw/main/lemon-screenshot.gif)

## Running it

```
npm run install
node index.js
```

(you may need to run node as `sudo` if you encounter errors about serial port access)

In another terminal, run:

```
npm install --global serve
npx serve html
```

Then visit http://localhost:3000

## Device

This project uses an [Arduino](https://www.arduino.cc/), along with a [potentiometer](https://docs.arduino.cc/learn/electronics/potentiometer-basics).

You can use the following circuit:

![lemon circuit](https://github.com/blairjordan/lemondial/raw/main/lemon-circuit.png)
