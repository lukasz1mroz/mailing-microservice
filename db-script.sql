CREATE TABLE messages (id SERIAL PRIMARY KEY, sender VARCHAR, topic VARCHAR, body VARCHAR, send_date DATE);
CREATE TABLE receipents (id SERIAL PRIMARY KEY, email VARCHAR, message_id INTEGER NOT NULL, CONSTRAINT fk_message FOREIGN KEY(message_id) REFERENCES messages(id));
CREATE TABLE attachments (id SERIAL PRIMARY KEY, file_name VARCHAR, file_path VARCHAR, message_id INTEGER NOT NULL, CONSTRAINT fk_message FOREIGN KEY(message_id) REFERENCES messages(id));

INSERT INTO messages (sender, topic, body, send_date) VALUES ('sender1@example.com', 'Test 1 topic', 'Test 1 body', '2022-11-06 12:11:17.249741+01');
INSERT INTO messages (sender, topic, body, send_date) VALUES ('sender2@example.com', 'Test 2 topic', 'Test 2 body', '2022-11-07 12:11:17.249741+01');

INSERT INTO receipents (email, message_id) VALUES ('receiver1@example.com', 1);
INSERT INTO receipents (email, message_id) VALUES ('receiver2@example.com', 1);
INSERT INTO receipents (email, message_id) VALUES ('receiver3@example.com', 2);

INSERT INTO attachments (file_name, file_path, message_id) VALUES ('Test 1 file', 'Test 1 path', 1);
INSERT INTO attachments (file_name, file_path, message_id) VALUES ('Test 2 file', 'Test 2 path', 1);
INSERT INTO attachments (file_name, file_path, message_id) VALUES ('Test 3 file', 'Test 3 path', 2);