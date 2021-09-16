USE DemoTechnobel
GO

CREATE TABLE Bread (
	BreadId INT IDENTITY PRIMARY KEY,
	Name NVARCHAR(100) NOT NULL,
	Price DECIMAL,
	Weight DECIMAL,
	Category NVARCHAR(50)
);

INSERT INTO Bread (Name, Price, Weight, Category)
 VALUES ('Petite Baguette Blanche', 0.75, 150, 'Baguette'),
		('Baguette Blanche', 1.5, 250, 'Baguette'),
		('Baguette à l''ancienne', 2.5, 250, 'Baguette'),
		('Carre 800 gr', 4.99, 800, 'Pain blanc'),
		('Carre 400 gr', 2.99, 400, 'Pain blanc'),
		('Carre Complet 800 gr', 5.49, 800, 'Pain complet'),
		('Carre Complet 400 gr', 3, 400, 'Pain complet');