INSERT INTO category (id, name)
VALUES
(1, 'Principal'),
(2, 'Entrada'),
(3, 'Arroz'),
(4, 'Vegetales');

INSERT INTO product (id, name, category_id, description, image, price, deleted_at, created_at, updated_at)
VALUES
(1, 'Beijing Beef', 1, 'Crujientes tiras de res empanizadas, marinadas con pimiento rojo, cebolla y salsa dulce-picante.', 'beijing_beef.jpg', 1300.0, NULL, NOW(), NOW()),
(2, 'Mongolian Pork', 1, 'Fajitas de cerdo marinadas con pimiento rojo, cebollín, champiñón y cebolla en una deliciosa salsa mongolian.', 'BLACK-BEAN-PORK.jpg', 1100.0, NULL, NOW(), NOW()),
(3, 'Broccoli Beef', 1, 'Res marinada con brócoli, jengibre y salsa de soya.', 'BROCCOLI-BEEF.jpg', 2450.0, NULL, NOW(), NOW()),
(4, 'Chow Mein', 1, 'Fideos de harina integral sazonados con cebolla, apio y col.', 'CHOW-MEIN.jpg', 1250.0, NULL, NOW(), NOW()),
(5, 'Dumplings', 2, 'Dumplings a la sartén, rellenos de pollo, repollo y cebolla.', 'dumplings.jpg', 1520.0, NULL, NOW(), NOW()),
(6, 'Fried Rice', 3, 'Arroz sazonado con salsa de ostión, huevo, chicharos y zanahorias.', 'FRIED-RICE.jpg', 1350.0, NULL, NOW(), NOW()),
(7, 'Kung Pao Chicken', 1, 'Pollo marinado con cacahuate, pimiento rojo, calabaza y chile de árbol.', 'KUNG-PAO-CHICKEN.jpg', 1120.0, NULL, NOW(), NOW()),
(8, 'Mixed Vegetables', 4, 'Mezcla de brócoli, calabazas, zanahorias, ejotes y col.', 'MIXED-VEGETABLES.jpg', 1420.0, NULL, NOW(), NOW()),
(9, 'Mongolian Beef', 1, 'Carne de res marinada cocinada al Wok con champiñones, chile pimiento rojo y cebollín y cebolla sazonada con salsa de ajo.', 'MONGOLIAN-BEEF.jpg', 1560.0, NULL, NOW(), NOW()),
(10, 'Mushroom Chicken', 1, 'Pollo, setas y calabacín salteados al wok con salsa de soya y jengibre.', 'MUSHROOM-CHICKEN.jpg', 1480.0, NULL, NOW(), NOW()),
(11, 'Orange Chicken', 1, 'Crujiente pollo sazonado con nuestra salsa agridulce y picante de naranja.', 'ORANGE-CHICKEN.jpg', 1630.0, NULL, NOW(), NOW()),
(12, 'String Bean Chicken', 1, 'Pechuga de pollo, ejote y cebolla, sazonados con una suave salsa de soya y jengibre', 'ORANGE-CHICKEN.jpg', 1630.0, NULL, NOW(), NOW()),
(13, 'VEGGIE NOODLE SOUP', 1, 'Sopa con vegetales y chow mein', 'VEGGIE-NOODLE-SOUP.jpg', 1230.0, NULL, NOW(), NOW()),
(14, 'Rollos Primavera', 1, 'Repollo, apio, zanahorias, cebolla y fideos chinos en una envoltura crujiente de wonton', 'VEGGIE-SPRING-ROLL.jpg', 1630.0, NULL, NOW(), NOW()),
(15, 'Arroz Blanco', 1, 'Arroz blanco al vapor', 'WHITE-STEAMED-RICE.jpg', 1630.0, NULL, NOW(), NOW());

INSERT INTO role (id, name)
VALUES
(1, 'Admin'),
(2, 'Customer');

INSERT INTO user (id, firstName, lastName, email, password, role, image, deleted_at, created_at, updated_at)
VALUES
(1, 'Manuel', 'Belgrano', 'mbelgrano@argentina.com', '$2a$10$clavesecretaClGvZk0TVGFuy6uj6BeTq0zSNOvGl0/QcUpikdd6D1j2F', 1, 'manuel_belgrano.jpg', NULL, NOW(), NOW()),
(2, 'José de San', 'Martín', 'jdesanmartin@argentina.com', '$2a$10$clavesecretaRkv6i9ThDgJxDRPPNdoNRk9okxqymB99MpyvRAs', 2, 'jose_de_san_martin.jpg', NULL, NOW(), NOW()),
(3, 'Mariano', 'Moreno', 'mmoreno@argentina.com', '$2a$10$clavesecreta/JI8EobR3/NlL0oedF7/NxXjSsKdS6zr6AohmEhM', 2, 'mariano_moreno.jpg', NULL, NOW(), NOW()),
(4, 'Juan José', 'Castelli', 'jjcastelli@argentina.com', '$2a$10$clavesecretaWQwKZZW0qdxp/9e80LJizhkyIfsBvHv2eKuBG5N', 1, 'juan_jose_castelli.jpg', NULL, NOW(), NOW()),
(5, 'Manuel', 'Dorrego', 'mdorrego@argentina.com', '$2a$10$clavesecretaU5YufOW9AkvELBeIz0xU1p/iuH5yUEnxKFnYfC', 2, 'manuel_dorrego.jpg', NULL,  NOW(), NOW()),
(6, 'Juan', 'Lavalle', 'jlavalle@argentina.com', '$2a$10$clavesecretaUfU/YHo9bJWg8RDK7/hNFn/0AzjE5fZNh7Qn7', 1, 'juan_lavalle.jpg', NULL, NOW(), NOW()),
(7, 'Cornelio', 'Saaavedra', 'csaaavedra@argentina.com', '$2a$10$clavesecreta/NhiN6UMFln8Z0qlxyAFRyJszLxNwqlZycEQJF9E', 1, 'cornelio_saaavedra.jpg', NULL, NOW(), NOW()),
(8, 'Juan Martín', 'de Pueyrredón', 'jmpueyrredon@argentina.com', '$2a$10$clavesecreta.JIDw8BBEqzjgrS6P.CP8lCHLMI93bSiY7FfGf1S', 2, 'juan_martin_de_pueyrredon.jpg', NULL, NOW(), NOW()),
(9, 'Domingo', 'Sarmiento', 'dsarmiento@argentina.com', '$2a$10$clavesecreta9b2n1zBMLs0q.GUJYYjtFf0adA.1s3M0oU0z2A', 1, 'domingo_sarmiento.jpg', NULL, NOW(), NOW()),
(10, 'Juan', 'Bautista Alberdi', 'jbalberdi@argentina.com', '$2a$10$clavesecretaKjShqKsnvfX1.cDWwOv4z/98tkik9GzK4MDS1i8', 1, 'juan_bautista_alberdi.jpg', NULL, NOW(), NOW()),
(11, 'fernando', 'benavidez', 'benavidez@example.com', '$2b$10$OzHjfzwGmvkfuaSsftv9xu33gNUm/70WdTMgCMBOHlDf8rVcf.AMm', 2, '../../public/img/users/1695802833389.jpg', NULL, NOW(), NOW()),
(12, 'Guadalupe', 'Paez', 'guada@gmail.com', '$2b$10$bOjpPGSrMQmYMHKEwpRJqeOhj.I1p3O.qLCb3HsyP6kAkVfeQrOdy', 2, NULL, NULL, NOW(), NOW());


INSERT INTO invoice (user_id, date, total_amount)
VALUES
(1, NOW(), 3750.0), 
(2, NOW(), 2620.0), 
(3, NOW(), 2500.0), 
(4, NOW(), 2680.0); 

INSERT INTO invoice_detail (invoice_id, product_id, quantity, unit_price)
VALUES
(1, 1, 2, 1300.0),
(1, 3, 1, 2450.0),
(2, 2, 1, 1100.0),
(2, 5, 2, 1520.0),
(3, 4, 1, 1250.0),
(3, 6, 1, 1350.0),
(4, 7, 3, 1120.0),
(4, 9, 1, 1560.0);


