DROP DATABASE IF EXISTS "rememberly";

CREATE DATABASE "rememberly";

\c "rememberly"

CREATE TABLE cards (id SERIAL PRIMARY KEY, 
                    question TEXT NOT NULL, 
                    answer TEXT NOT NULL);
                    
CREATE TABLE decks (id SERIAL PRIMARY KEY, 
                    name TEXT NOT NULL);

CREATE TABLE users (id SERIAL PRIMARY KEY, 
                    username TEXT NOT NULL, 
                    password TEXT NOT NULL);

CREATE TABLE cards_decks (card_id INTEGER REFERENCES cards ON DELETE CASCADE,
                          deck_id INTEGER REFERENCES decks ON DELETE CASCADE);

CREATE TABLE users_cards (user_id INTEGER REFERENCES users ON DELETE CASCADE,
                          card_id INTEGER REFERENCES cards ON DELETE CASCADE);
                    
INSERT INTO cards (question,answer) VALUES
    ('What year is it?', '2018'),
    ('What color is the sky', 'Blue');

INSERT INTO decks (name) VALUES
    ('sample'), ('meteorology');

INSERT INTO users (username, password) VALUES
    ('u1', 'password');

-- INSERT INTO user (username, password) VALUES
--     ('u1'), ('password');
