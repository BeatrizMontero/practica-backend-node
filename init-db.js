const readline = require('readline');

const Anuncio = require('./models/Anuncio');

async function main() {

 const continuar = await preguntaSiNo('Estás Segur@ de BORRAR la base de datos? [n]')
  if (!continuar) {
    process.exit();
  }

  const connection = require('./lib/connectMongoose')

  await initAnuncios();

  connection.close();
}

main().catch(err => console.log('Hubo un error', err));

async function initAnuncios() {
  
  const result = await Anuncio.deleteMany();
  console.log(`Eliminados ${result.deletedCount} anuncios.`);

  const inserted = await Anuncio.insertMany([
    
        {
        nombre: "Bicicleta",
        venta: true,
        precio: 230.15,
        foto: ('/public/images/bici.jpg'),
        tags: ["lifestyle", "motor"]
        },
        {
        nombre: "iPhone 3GS",
        venta: false,
        precio: 50.00,
        foto: ('/public/images/iphone.jpg'),
        tags: ["lifestyle", "mobile"]
        },
        {
        nombre: "Vinilo",
        venta: false,
        precio: 25.00,
        foto: ('/public/images/VivaSuecia.jpg'),
        tags: ["lifestyle"]
        }

  ]);

  console.log(`Creados ${inserted.length} anuncios.`)
}

function preguntaSiNo(texto) {
  return new Promise((resolve, reject) => {
    const interface = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    interface.question(texto, respuesta => {
      interface.close();
      if (respuesta.toLowerCase() === 'si') {
        resolve(true);
        return;
      }
      resolve(false);
    })
  })
}