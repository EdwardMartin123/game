-- Number of titles and average price of titles for each author
SELECT au_fname + ' ' + au_lname AS Author, bookswritten AS 'Books Written', averageprice AS 'Average Price', mostrecent AS 'Most Recent Publish Date'
FROM [DBATest].[dbo].[authors] AS authors
INNER JOIN
(SELECT au_id, COUNT(titles.title_id) AS bookswritten, AVG(price) AS averageprice, MAX(YEAR(pubdate)) AS mostrecent
FROM [DBATest].[dbo].[titles] AS titles
INNER JOIN 
[DBATest].[dbo].[titleauthor] AS titleauthor
ON titleauthor.title_id=titles.title_id
GROUP BY au_id) AS averages
ON authors.au_id = averages.au_id
ORDER BY averageprice DESC
