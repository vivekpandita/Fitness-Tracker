-- INSERT INTO ACTIVITY(ID, STEPS, TITLE) VALUES (1,22,'ACTIVITY 1');
-- INSERT INTO ACTIVITY(ID, STEPS, TITLE) VALUES (2,5000,'Running');

drop table if exists activity; 
create table activity (activity_type_id bigint, calories bigint, distance bigint, duration bigint, id bigint generated by default as identity, intensity bigint, start_date timestamp(6), steps bigint, user_id bigint, additional_notes varchar(255), title varchar(255), primary key (id));

INSERT INTO ACTIVITY(ID, STEPS, TITLE) VALUES (1,500,'Walk');
INSERT INTO ACTIVITY(ID, STEPS, TITLE) VALUES (2,5000,'Running');