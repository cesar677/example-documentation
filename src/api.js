import express from 'express'
const app = express()
/**
 * @module API
 */
/**
 * index routes 
 * @name index
 * @path {GET} /
 */
app.get('/', (req, res ) => res.send('Welcome'))
/**
 * index routes
 * @name users
 * @path {POST} /users
 */
app.post('/users', (req, res ) => res.send('Welcome'))
/**
 * index routes 
 * @name product
 * @path {DELETE} /product
 */
app.delete('/product', (req, res ) => res.send('Welcome'))
/**
 * index routes 
  * @name signin
 * @path {POST} /signin
 */
app.post('/signin', (req, res ) => res.send('Welcome'))/**
 * index routes 
 * @name update
 * @path {PUT} /update
 */
app.put('/update', (req, res ) => res.send('Welcome'))