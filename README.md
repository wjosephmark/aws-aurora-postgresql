# aws-aurora-postgresql
* A simple connection to a PostgreSQL instance within AWS RDS Aurora, written in Node.

## queryCentric
* This function takes in the query, establishes a connection with the database, and passes the query before returning the response recieved from Aurora.
* This function expects the SQL query passed as a string.
* This function returns the response object recieved from Aurora.