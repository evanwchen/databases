CREATE DATABASE chat;

USE chat;

CREATE TABLE users (id INT NOT NULL, 
  username VARCHAR(50) NOT NULL,  
  PRIMARY KEY (id));

CREATE TABLE chatrooms (id INT NOT NULL, 
  roomname VARCHAR(50) NOT NULL,  
  PRIMARY KEY (id));

CREATE TABLE messages (id INT NOT NULL, 
  message VARCHAR(200) NOT NULL, 
  chatroomID INT NOT NULL, 
  userID INT(4) NOT NULL, 
  PRIMARY KEY (id),
  FOREIGN KEY (chatroomID) references chatrooms (id),
  FOREIGN KEY (userID) references users (id));

CREATE TABLE friends (id INT NOT NULL, 
  userID INT(4) NOT NULL,
  friendID INT(4) NOT NULL,    
  PRIMARY KEY (id),
  FOREIGN KEY (userID) references users (id),
  FOREIGN KEY (friendID) references users (id));


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

