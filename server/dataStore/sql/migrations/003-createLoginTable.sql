CREATE TABLE Login (

  id  VARCHAR NOT NULL  ,
  expired  INTEGER NOT NULL,
  FOREIGN KEY (id) REFERENCES users (id)
);

