INSERT INTO category (name)
VALUES
('Principal'),
('Entrada'),
('Arroz'),
('Vegetales');

INSERT INTO product (name, category_id, description, image, price, deletedAt, createdAt, updatedAt)
VALUES
('Beijing Beef', 1, 'Crujientes tiras de res empanizadas, marinadas con pimiento rojo, cebolla y salsa dulce-picante.', 'beijing_beef.jpg', 1300.0, NULL, NOW(), NOW()),
('Mongolian Pork', 1, 'Fajitas de cerdo marinadas con pimiento rojo, cebollín, champiñón y cebolla en una deliciosa salsa mongolian.', 'BLACK-BEAN-PORK.jpg', 1100.0, NULL, NOW(), NOW()),
('Broccoli Beef', 1, 'Res marinada con brócoli, jengibre y salsa de soya.', 'BROCCOLI-BEEF.jpg', 2450.0, NULL, NOW(), NOW()),
('Chow Mein', 1, 'Fideos de harina integral sazonados con cebolla, apio y col.', 'CHOW-MEIN.jpg', 1250.0, NULL, NOW(), NOW()),
('Dumplings', 2, 'Dumplings a la sartén, rellenos de pollo, repollo y cebolla.', 'dumplings.jpg', 1520.0, NULL, NOW(), NOW()),
('Fried Rice', 3, 'Arroz sazonado con salsa de ostión, huevo, chicharos y zanahorias.', 'FRIED-RICE.jpg', 1350.0, NULL, NOW(), NOW()),
('Kung Pao Chicken', 1, 'Pollo marinado con cacahuate, pimiento rojo, calabaza y chile de árbol.', 'KUNG-PAO-CHICKEN.jpg', 1120.0, NULL, NOW(), NOW()),
('Mixed Vegetables', 4, 'Mezcla de brócoli, calabazas, zanahorias, ejotes y col.', 'MIXED-VEGETABLES.jpg', 1420.0, NULL, NOW(), NOW()),
('Mongolian Beef', 1, 'Carne de res marinada cocinada al Wok con champiñones, chile pimiento rojo y cebollín y cebolla sazonada con salsa de ajo.', 'MONGOLIAN-BEEF.jpg', 1560.0, NULL, NOW(), NOW()),
('Mushroom Chicken', 1, 'Pollo, setas y calabacín salteados al wok con salsa de soya y jengibre.', 'MUSHROOM-CHICKEN.jpg', 1480.0, NULL, NOW(), NOW()),
('Orange Chicken', 1, 'Crujiente pollo sazonado con nuestra salsa agridulce y picante de naranja.', 'ORANGE-CHICKEN.jpg', 1630.0, NULL, NOW(), NOW()),
('String Bean Chicken', 1, 'Pechuga de pollo, ejote y cebolla, sazonados con una suave salsa de soya y jengibre', 'ORANGE-CHICKEN.jpg', 1630.0, NULL, NOW(), NOW()),
('VEGGIE NOODLE SOUP', 1, 'Sopa con vegetales y chow mein', 'VEGGIE-NOODLE-SOUP.jpg', 1230.0, NULL, NOW(), NOW()),
('Rollos Primavera', 1, 'Repollo, apio, zanahorias, cebolla y fideos chinos en una envoltura crujiente de wonton', 'VEGGIE-SPRING-ROLL.jpg', 1630.0, NULL, NOW(), NOW()),
('Arroz Blanco', 1, 'Arroz blanco al vapor', 'WHITE-STEAMED-RICE.jpg', 1630.0, NULL, NOW(), NOW());

INSERT INTO role (name)
VALUES
('Admin'),
('Customer');

INSERT INTO user (firstName, lastName, email, password, role_id, image, deletedAt, createdAt, updatedAt)
VALUES
('Manuel', 'Belgrano', 'mbelgrano@argentina.com', '$2b$10$WKNvDkGydM3qB9bqn1DCye6iMvGy8AKYJ3KXB6f5mkvB3sgnQuXIW', 1, 'manuel_belgrano.jpg', NULL, NOW(), NOW()),
('José de San', 'Martín', 'jdesanmartin@argentina.com', '$2b$10$WKNvDkGydM3qB9bqn1DCye6iMvGy8AKYJ3KXB6f5mkvB3sgnQuXIW', 2, 'jose_de_san_martin.jpg', NULL, NOW(), NOW()),
('Mariano', 'Moreno', 'mmoreno@argentina.com', '$2b$10$WKNvDkGydM3qB9bqn1DCye6iMvGy8AKYJ3KXB6f5mkvB3sgnQuXIW', 2, 'mariano_moreno.jpg', NULL, NOW(), NOW()),
('Juan José', 'Castelli', 'jjcastelli@argentina.com', '$2b$10$WKNvDkGydM3qB9bqn1DCye6iMvGy8AKYJ3KXB6f5mkvB3sgnQuXIW', 1, 'juan_jose_castelli.jpg', NULL, NOW(), NOW()),
('Manuel', 'Dorrego', 'mdorrego@argentina.com', '$2b$10$WKNvDkGydM3qB9bqn1DCye6iMvGy8AKYJ3KXB6f5mkvB3sgnQuXIW', 2, 'manuel_dorrego.jpg', NULL,  NOW(), NOW()),
('Juan', 'Lavalle', 'jlavalle@argentina.com', '$2b$10$WKNvDkGydM3qB9bqn1DCye6iMvGy8AKYJ3KXB6f5mkvB3sgnQuXIW', 1, 'juan_lavalle.jpg', NULL, NOW(), NOW()),
('Cornelio', 'Saaavedra', 'csaaavedra@argentina.com', '$2b$10$WKNvDkGydM3qB9bqn1DCye6iMvGy8AKYJ3KXB6f5mkvB3sgnQuXIW', 1, 'cornelio_saaavedra.jpg', NULL, NOW(), NOW()),
('Juan Martín', 'de Pueyrredón', 'jmpueyrredon@argentina.com', '$2b$10$WKNvDkGydM3qB9bqn1DCye6iMvGy8AKYJ3KXB6f5mkvB3sgnQuXIW', 2, 'juan_martin_de_pueyrredon.jpg', NULL, NOW(), NOW()),
('Domingo', 'Sarmiento', 'dsarmiento@argentina.com', '$2b$10$WKNvDkGydM3qB9bqn1DCye6iMvGy8AKYJ3KXB6f5mkvB3sgnQuXIW', 1, 'domingo_sarmiento.jpg', NULL, NOW(), NOW()),
('Admin', 'Admin', 'admin@admin.com', '$2b$10$WKNvDkGydM3qB9bqn1DCye6iMvGy8AKYJ3KXB6f5mkvB3sgnQuXIW', 1, 'juan_bautista_alberdi.jpg', NULL, NOW(), NOW()),
('fernando', 'benavidez', 'benavidez@example.com', '$2b$10$WKNvDkGydM3qB9bqn1DCye6iMvGy8AKYJ3KXB6f5mkvB3sgnQuXIW', 2, '../../public/img/users/1695802833389.jpg', NULL, NOW(), NOW()),
('Guadalupe', 'Paez', 'guada@gmail.com', '$2b$10$WKNvDkGydM3qB9bqn1DCye6iMvGy8AKYJ3KXB6f5mkvB3sgnQuXIW', 2, NULL, NULL, NOW(), NOW());


INSERT INTO invoice (user_id, date, total_amount)
VALUES
(1, NOW(), 3750.0), 
(2, NOW(), 2620.0), 
(3, NOW(), 2500.0), 
(4, NOW(), 2680.0); 

INSERT INTO invoice_detail (invoice_id, product_id, quantity, unit_price)
VALUES
(1, 1, 1, 1300.0),
(1, 3, 1, 2450.0),
(2, 2, 1, 1100.0),
(2, 5, 1, 1520.0),
(3, 4, 1, 1250.0),
(3, 6, 1, 1350.0),
(4, 7, 1, 1120.0),
(4, 9, 1, 1560.0);


