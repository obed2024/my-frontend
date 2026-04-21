import swaggerAutogen from 'swagger-autogen';

const doc = {
  openapi: '3.0.0', 
  info: {
    title: 'My MySQL API',
    description: 'Testing endpoints with JWT Auth',
    version: '1.0.0'
  },
  host: 'localhost:5000',
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      }
    }
  },

  security: [
    {
      bearerAuth: []
    }
  ]
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./index.js']; 


swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc);
