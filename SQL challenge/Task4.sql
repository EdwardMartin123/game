-- Authors who have co-authored a book
SELECT au_fname + ' ' + au_lname AS Authors
FROM [DBATest].[dbo].[authors] AS authors
INNER JOIN
(SELECT DISTINCT au_id
FROM [DBATest].[dbo].[titleauthor] AS titleauthor
INNER JOIN
(SELECT DISTINCT COUNT(au_id) as Count, title_id --, COUNT(title_id)
FROM [DBATest].[dbo].[titleauthor] AS titleauthor
GROUP BY (titleauthor.title_id)
HAVING COUNT(au_id) > 1) AS authorcount
ON authorcount.title_id = titleauthor.title_id) AS authorids
ON authorids.au_id = authors.au_id
ORDER BY au_lname ASC
