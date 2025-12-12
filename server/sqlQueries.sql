CREATE TABLE gbComms (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username TEXT,
    comment TEXT
);
-- add date column
ALTER TABLE gbComms
ADD date varchar(20);
-- remove test comments
TRUNCATE TABLE gbComms;
INSERT INTO gbComms (username, comment, date)
VALUES ('Andrew', 'test comment', 'December 2025');