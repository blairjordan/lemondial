const SerialPort = require('serialport');
const Parser = require('@serialport/parser-byte-length');
const port = new SerialPort('/dev/ttyACM0', { baudRate: 9600 });
const parser = port.pipe(new Parser({ length: 1 }));
const fs = require('fs')

const outputPath = './html/output.txt';

port.on("open", () => {
  console.log('serial port open');
});

let x = 0

parser.on('data', data =>{
  const p = Buffer.from(data).readUInt8();
  const n = normalize(p);
  if (n !== x) {
    x = n;
    console.log(x);
    fs.writeFileSync(outputPath, n.toString(), { encoding: 'utf8' })
  } 
});

const normalize = (input) =>
  Math.ceil(input / 255 * 100);

