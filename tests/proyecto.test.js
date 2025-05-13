const request = require('supertest');
const app = require('../src/app');
let token;
 
beforeAll(async () => {
  // Registrar y loguear para obtener token
  await request(app).post('/auth/registro').send({
    nombre:'Test', email:'test@x.com', contraseña:'Pass1234', rol:'admin'
  });
  const res = await request(app).post('/auth/login')
    .send({ email:'test@x.com', contraseña:'Pass1234' });
  token = res.body.token;
});
 
describe('Proyectos', () => {
  it('debe crear un proyecto', async () => {
    const res = await request(app)
      .post('/proyectos')
      .set('Authorization', 'Bearer ' + token)
      .send({ titulo:'Nuevo', descripcion:'Desc' });
    expect(res.statusCode).toBe(201);
    expect(res.body.titulo).toBe('Nuevo');
  });
 
  it('debe listar proyectos paginados', async () => {
    const res = await request(app)
      .get('/proyectos?page=1&limit=5')
      .set('Authorization', 'Bearer ' + token);
    expect(res.body.proyectos).toBeInstanceOf(Array);
  });
});