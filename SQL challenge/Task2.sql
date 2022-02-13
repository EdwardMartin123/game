-- Bestselling psychology book of 1991
SELECT TOP 1 title AS Title, au_fname + ' ' + au_lname AS Author
FROM [DBATest].[dbo].[titles] AS titles
INNER JOIN
[DBATest].[dbo].[titleauthor] AS titleauthor
ON titleauthor.title_id = titles.title_id
INNER JOIN 
[DBATest].[dbo].[authors] AS authors
ON authors.au_id=titleauthor.au_id
WHERE type = 'psychology' AND YEAR(pubdate) = 1991
ORDER BY ytd_sales DESC

