# E-Commerce BackEnd

## Description ![MIT badge](https://img.shields.io/badge/License-MIT-brightgreen)

This is a server-side application for e-commerce businesses. It uses express and sequelize to communicate with the MySql Database to retrieve relevant information.

## Demo Video

https://youtu.be/x_ZrFmKwo5k


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

1. navigate to the main folder in the terminal
2. sign into mySql
3. source the schema file in db and make sure to use the database
4. back in the main folder, "npm install" necessary libraries
5. "npm run seed"
6. "npm run watch"
7. test the routes in Insomnia

## Usage

This application uses insomnia to access infromation. Users enter the domain and desired route parameters and choose the appropriate route method. Note, post and put routes need extra infromation in the json body.

examples:

POST route for `api/products` :

```
{
  "product_name": "Jacket",
  "price": 200.00,
  "stock": 3,
  "tagIds": [1, 2, 4]
}
```

PUT route for `api/products/:id` :

```
{
  "product_name": "Not a plain t-shirt",
  "price": 20.00,
  "stock": 1000,
  "tagIds": [6,7]
}
```

POST route for `api/tags` :

```
{
	"tag_name": "fluffy",
	"productIds": [2,5]
}
```

PUT route for `api/tags/:id` :

```
{
	"tag_name": "Blue",
	"productIds": [2]
}
```

POST route for `api/categories` :

```
{
	"category_name": "New Category",
	"productIds": [2,4]
}
```

PUT route for `api/product/categories/:id` :

```
{
	"category_name": "Not shirts",
	"productIds": [1,2]
}
```

## License

Please refer to the LICENSE in the repo
