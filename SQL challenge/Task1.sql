-- Books published by Stearns MacFeather
SELECT title, ytd_sales
FROM [DBATest].[dbo].[titles] AS titles
INNER JOIN
[DBATest].[dbo].[titleauthor] AS titleauthor
ON titleauthor.title_id = titles.title_id
INNER JOIN 
[DBATest].[dbo].[authors] AS authors
ON authors.au_id=titleauthor.au_id
WHERE au_fname = 'Stearns' AND au_lname = 'MacFeather'
ORDER BY ytd_sales DESC