CREATE TABLE IF NOT EXISTS `user` (
     `id` INT unsigned NOT NULL AUTO_INCREMENT,
     `username` VARCHAR(45) NOT NULL,
     `email` VARCHAR(45) NOT NULL,
     `password` VARCHAR(45) NOT NULL,
     PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `product` (
     `id` INT unsigned NOT NULL AUTO_INCREMENT,
     `title` VARCHAR(100) NOT NULL,
     `description` VARCHAR(200) NOT NULL,
     `price` INT NOT NULL,
     `stock` INT NOT NULL,
     `image` VARCHAR(255),
     `category` VARCHAR(100)
     PRIMARY key (`id`)
);
CREATE TABLE IF NOT EXISTS`cart` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    customer_id INT,
    quantity INT,
    FOREIGN KEY (product_id) REFERENCES product(id),
    FOREIGN KEY (customer_id) REFERENCES user(id)
);