-- Titles published for each author per year
SELECT au_fname + ' ' + au_lname AS Author, Year, Titles
FROM [DBATest].[dbo].[authors] AS authors
INNER JOIN
(SELECT titleauthor.au_id, YEAR(pubdate) AS Year, COUNT(titles.title_id) AS Titles
FROM [DBATest].[dbo].[titles] AS titles
INNER JOIN
[DBATest].[dbo].[titleauthor] AS titleauthor
ON titleauthor.title_id = titles.title_id
INNER JOIN 
[DBATest].[dbo].[authors] AS authors
ON authors.au_id=titleauthor.au_id
GROUP BY titleauthor.au_id, YEAR(pubdate)) AS grouped
ON grouped.au_id = authors.au_id
ORDER BY Titles DESC
