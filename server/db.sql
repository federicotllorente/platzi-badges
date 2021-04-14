CREATE DATABASE platzi_badges;

USE platzi_badges;

CREATE TABLE badges(
    id INT NOT NULL AUTO_INCREMENT,
    fname VARCHAR(50) NOT NULL,
    lname VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    jtitle VARCHAR(50) NOT NULL,
    twitter VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

DESCRIBE badges;