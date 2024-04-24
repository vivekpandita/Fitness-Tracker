-- INSERT INTO ACTIVITY(ID, STEPS, TITLE) VALUES (1,22,'ACTIVITY 1');
-- INSERT INTO ACTIVITY(ID, STEPS, TITLE) VALUES (2,5000,'Running');

drop table if exists activity_type; 
create table activity_type (id bigint generated by default as identity, description varchar(255), abbreviation varchar(4), primary key (id));

INSERT INTO ACTIVITY_TYPE(id, ABBREVIATION, DESCRIPTION) VALUES (1000,'WK','Walking');
INSERT INTO ACTIVITY_TYPE(id, ABBREVIATION, DESCRIPTION) VALUES (1001,'RN','Running');
INSERT INTO ACTIVITY_TYPE(id, ABBREVIATION, DESCRIPTION) VALUES (1002,'SW','Swimming');
INSERT INTO ACTIVITY_TYPE(id, ABBREVIATION, DESCRIPTION) VALUES (1003,'YG','Yoga');
INSERT INTO ACTIVITY_TYPE(id, ABBREVIATION, DESCRIPTION) VALUES (1004,'DC','Dancing');
INSERT INTO ACTIVITY_TYPE(id, ABBREVIATION, DESCRIPTION) VALUES (1005,'GY','Gymnastics');
INSERT INTO ACTIVITY_TYPE(id, ABBREVIATION, DESCRIPTION) VALUES (1006,'WT','Weight Training');
INSERT INTO ACTIVITY_TYPE(id, ABBREVIATION, DESCRIPTION) VALUES (1007,'ZU','Zumba');

drop table if exists activity; 
create table activity (activity_type_id bigint, calories bigint, distance bigint, duration bigint, id bigint generated by default as identity, intensity bigint, start_date timestamp(6), steps bigint, user_id bigint, additional_notes varchar(255), title varchar(255), primary key (id));

INSERT INTO ACTIVITY(ID, STEPS, TITLE, start_date, ACTIVITY_TYPE_ID) VALUES (5000,500,'Walk','2019-11-28T17:58:12.776Z', 1000);
INSERT INTO ACTIVITY(ID, STEPS, TITLE, ACTIVITY_TYPE_ID) VALUES (5001,5000,'Running', 1001);
INSERT INTO ACTIVITY(ID, STEPS, TITLE, ADDITIONAL_NOTES, ACTIVITY_TYPE_ID) VALUES (5002,10,'Swimming', 'Did Swimming in a 100m pool with 2 full rounds', 1002);
INSERT INTO ACTIVITY(ID, STEPS, TITLE, ACTIVITY_TYPE_ID) VALUES (5003,2000,'Running Evening', 1001);
