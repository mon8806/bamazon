DELETE DATABASE IF EXISTS bamazondb;

CREATE DATABASE bamazondb;

USE bamazondb;

CREATE TABLE  products (
    item_id INT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL (10, 4) NOT NULL,
    stock_quantity INT(100) NOT NULL,
    PRIMARY KEY(item_id)
);

SELECT * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "monopoly", "Game Boards", 9.99, 20),
    (33, "Cupcake Mold", "Baking", 14.99, 10),
    (60, "Nylabone Chew Toy", "Dog Toy", 5, 15),
    (100, "Nike Slipper", "Shoes", 12.99, 33),
    (210, "Lord of The Rings", "Books", 10, 49),
    (500, "Game of Thrones", "Movies", 29.99, 23),
    (630, "Iphone XR", "Cellphones", 1000, 100),
    (869, "Sony TV", "TVs", 599, 23),
    (900, "Leggings", "Clothes", 16.50, 12),
    (980, "Drill", "Power Tools", 299, 16)




