CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/IMG_1059.jpeg', 'Maria Sakkari', 'Photo taken at the US Open in 2023'),
('images/IMG_1226.jpeg', 'Naughty Mando', 'The Mandalorian doing something not so cool to Grogu');
('images/image000000.jpeg', 'Rue', 'Sad Rue after a hair cut');
('images/IMG_1356.jpeg', 'Mushroom Cave', 'Link in one of the coolest spots in TOTK! Good luck finding it.'),
('images/IMG_0314.jpeg', 'OOPS!', 'What happens when cutting your hair goes horribly wrong.');
('images/IMG_0590.jpeg', 'Japanese Breakfast', 'Photo of Michelle Zauner of Japanse Breakfasat at First Avenue. My first show after Covid!');
('images/IMG_0462.jpeg', 'Thor Trohy', 'Trophy I won at the Backgammon Viking Classic. Second place my firsrt time playing in open division!');Z

SELECT * FROM "gallery" ORDER BY id ASC;

-- Used for testing UPDATE "gallery" SET likes=likes+1 WHERE id=2

  