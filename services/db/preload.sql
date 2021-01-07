CREATE TABLE IF NOT EXISTS question (
    id BIGSERIAL PRIMARY KEY,
    mood INTEGER,
    question VARCHAR(255)
);
DELETE FROM question WHERE question LIKE 'CRUD Question%';
INSERT INTO question (question)
VALUES
    ('Will I be the next president of the world?'),
    ('Will I be the next Steve Jobs?'),
    ('Will I be rich and famous?'),
    ('Will my enemies envy me?'),
    ('Will I revolutionize the world?'),
    ('Will future generations remember me as the new Mesiah?'),
    ('Will my generation praise me like a living God?');


CREATE TABLE IF NOT EXISTS answer (
    id BIGSERIAL PRIMARY KEY,
    mood INTEGER,
    answer VARCHAR(255)
);
DELETE FROM answer WHERE answer LIKE 'CRUD Answer%';
INSERT INTO answer (answer)
VALUES
    ('You are great and you will achieve anything you want in this life.'),
    ('You are going to be even better than that.'),
    ('The whole industry envy you.'),
    ('Today is the next day in the road to your success.'),
    ('You are awesome.'),
    ('Can I send you my CV?');
