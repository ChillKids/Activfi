CREATE TABLE events (
  event_id serial PRIMARY KEY,
  event_creator VARCHAR,
  event_name VARCHAR,
  event_description VARCHAR,
  event_location VARCHAR,
  event_date DATE,
  created_at DATE
);

