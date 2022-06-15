const Hapi = require('@hapi/hapi');


const init = async () => {
  const server = Hapi.server({
    port: 8888,
    host: 'localhost',
  });
  
  await Hapi.server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
}

init();