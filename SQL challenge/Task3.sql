-- Authors of more than one book
SELECT au_fname + ' ' + au_lname AS Authors
FROM [DBATest].[dbo].[authors] AS authors
INNER JOIN
(SELECT COUNT(titleauthor.title_id) AS Count, au_id
FROM [DBATest].[dbo].[titleauthor] AS titleauthor
GROUP BY au_id
HAVING COUNT(titleauthor.title_id) > 1) AS multiauthorids
ON authors.au_id = multiauthorids.au_id
ORDER BY au_lname DESC
