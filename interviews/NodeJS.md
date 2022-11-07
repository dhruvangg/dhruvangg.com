### How NodeJS handle multiple client requests? 
NodeJS receives multiple client requests and places them into `EventQueue`. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
