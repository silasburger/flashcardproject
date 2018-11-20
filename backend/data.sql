DROP DATABASE IF EXISTS "cardly";

CREATE DATABASE "microblog";

\c "microblog"

CREATE TABLE cards (id SERIAL PRIMARY KEY, 
                    question TEXT NOT NULL, 
                    answer TEXT NOT NULL);
                    
INSERT INTO cards (question,answer) VALUES
    ('What year is it?', '2018'),
    ('What color is the sky', 'Blue');
