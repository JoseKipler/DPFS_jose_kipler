USE nexus_db;

SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE cart_items;
TRUNCATE TABLE carts;
TRUNCATE TABLE product_color;
TRUNCATE TABLE products;
TRUNCATE TABLE colors;
TRUNCATE TABLE categories;
TRUNCATE TABLE users;
TRUNCATE TABLE user_categories;
SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO user_categories (id, name) VALUES
(1, 'admin'),
(2, 'user');

INSERT INTO users (id, first_name, last_name, email, password, image, user_category_id) VALUES
(1, 'Jose', 'Kipler', 'admin@nexus.com', '$2b$10$UeXifx60sPrKze12Q/UG1uwwMqblUOZASMd2IFrWbheq4OybMvEai', 'default-user.png', 1),
(2, 'Lucía', 'Fernández', 'lucia.fernandez@example.com', '$2b$10$46FDNzvkb6bt3TD0VhIfnuEyZ/VQ68J78peoExB9RYUN7jwEctrYS', 'default-user.png', 2),
(3, 'Mateo', 'Rodríguez', 'mateo.rodriguez@example.com', '$2b$10$zyx/OsMHJiKq.LCx0wfTKudKqoa6ei1Tfsz9ncMExzY1t9lWusS.a', 'default-user.png', 2),
(4, 'Camila', 'Gómez', 'camila.gomez@example.com', '$2b$10$b9CqGYkzpeNTC/rmgkQ8ie4uWfM3ZokEvv0zzfEfYGvs1R/YIidzG', 'default-user.png', 2),
(5, 'Santiago', 'Pérez', 'santiago.perez@example.com', '$2b$10$wK3kH7TF7qwxFxCxRZkQ8enMCqLg8Nq6/u4lBZGT6.8Q1i1jPXj9u', 'default-user.png', 2),
(6, 'Jose', 'Kip', 'jose@nexus.com', '$2b$10$sFvnekPIMwm/MdybMPus7evHmN6lAa4ft9JoOeRV0XQbpPJAw59.q', 'user-1794232577985.png', 2);

INSERT INTO categories (id, name) VALUES
(1, 'Auriculares'),
(2, 'Monitores'),
(3, 'Mouse'),
(4, 'Placas de video'),
(5, 'Sillas'),
(6, 'Teclados');

INSERT INTO colors (id, name) VALUES
(1, 'Azul'),
(2, 'Blanco'),
(3, 'Negro'),
(4, 'Rojo');

INSERT INTO products (id, name, description, image, price, category_id) VALUES
(1, 'Teclado mecánico RGB 60%', 'Teclado mecánico compacto con iluminación RGB y switches intercambiables.', 'default.png', 85000, 6),
(2, 'Teclado mecánico TKL inalámbrico', 'Teclado sin teclado numérico, conexión Bluetooth y batería de larga duración.', 'default.png', 100000, 6),
(3, 'Mouse gamer inalámbrico 16000 DPI', 'Mouse liviano con sensor óptico de alta precisión y botones programables.', 'default.png', 12345, 3),
(4, 'Mouse gamer con cable', 'Mouse ergonómico con cable trenzado, iluminación RGB y 6 botones.', 'default.png', 28500, 3),
(5, 'Auriculares 7.1 con micrófono', 'Auriculares con sonido envolvente virtual 7.1 y micrófono desmontable.', 'default.png', 68000, 1),
(6, 'Auriculares inalámbricos de baja latencia', 'Auriculares inalámbricos con conexión de 2.4 GHz y 30 horas de batería.', 'default.png', 96000, 1),
(7, 'Monitor 24" 144Hz', 'Monitor gamer Full HD con tasa de refresco de 144Hz y 1 ms de respuesta.', 'default.png', 210000, 2),
(8, 'Monitor curvo 27" 165Hz', 'Monitor curvo QHD de 27 pulgadas con 165Hz y soporte regulable.', 'default.png', 340000, 2),
(9, 'Placa de video 8GB GDDR6', 'Placa de video para jugar en Full HD con trazado de rayos y doble ventilador.', 'default.png', 620000, 4),
(10, 'Placa de video 12GB GDDR6', 'Placa de video de alto rendimiento para jugar en QHD con refrigeración triple.', 'default.png', 890000, 4),
(11, 'Silla gamer ergonómica', 'Silla con respaldo reclinable, soporte lumbar y apoyabrazos regulables.', 'default.png', 245000, 5),
(12, 'Silla gamer con apoyapiés', 'Silla reclinable hasta 180 grados con apoyapiés retráctil y cojines.', 'default.png', 310000, 5);

INSERT INTO product_color (product_id, color_id) VALUES
(1, 3),
(1, 2),
(2, 3),
(3, 3),
(3, 2),
(4, 3),
(4, 4),
(5, 3),
(5, 4),
(6, 3),
(6, 2),
(6, 1),
(7, 3),
(8, 3),
(9, 3),
(10, 3),
(11, 3),
(11, 4),
(11, 1),
(12, 3),
(12, 2);
