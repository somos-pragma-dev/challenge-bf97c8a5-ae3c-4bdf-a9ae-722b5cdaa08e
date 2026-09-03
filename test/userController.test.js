const request = require('supertest');
const app = require('../src/index');
const User = require('../src/models/user');
const mongoose = require('mongoose');

describe('User Controller', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should create a new user', async () => {
    const res = await request(app)
     .post('/users')
     .send({
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('name', 'Test User');
  });

  it('should get all users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should get a user by ID', async () => {
    const user = new User({
      name: 'Test User',
      email: 'test2@example.com',
      password: 'password123',
    });
    await user.save();

    const res = await request(app).get(`/users/${user.id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name', 'Test User');
  });

  it('should update a user by ID', async () => {
    const user = new User({
      name: 'Test User',
      email: 'test3@example.com',
      password: 'password123',
    });
    await user.save();

    const res = await request(app)
     .put(`/users/${user.id}`)
     .send({ name: 'Updated User' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name', 'Updated User');
  });

  it('should delete a user by ID', async () => {
    const user = new User({
      name: 'Test User',
      email: 'test4@example.com',
      password: 'password123',
    });
    await user.save();

    const res = await request(app).delete(`/users/${user.id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'User deleted');
  });
});