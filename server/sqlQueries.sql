 -- create table for guestbook comments
CREATE TABLE gbComms (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username TEXT,
    comment TEXT
);
-- add date column
ALTER TABLE gbComms
ADD date varchar(20);
-- remove all comments
TRUNCATE TABLE gbComms;
-- remove all comments, reset id
TRUNCATE TABLE gbComms RESTART IDENTITY;
-- add comment for testing purposes
INSERT INTO gbComms (username, comment, date)
VALUES ('Andrew', 'test comment', 'December 2025');
-- add likes column
ALTER TABLE gbComms
ADD likes int2;