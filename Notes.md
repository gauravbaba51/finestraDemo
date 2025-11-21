Create a directory with the following naming format in C:\
	md <yourname>_finastra_demoapi
	md santosh_finastra_demoapi
 
Open this folder/directory
	cd <yourname>_finastra_demoapi
	cd santosh_finastra_demoapi
 
Thereafter issue the init command using the "npm" utility
	npm init -y
 
This command will create a "package.json" file within the current working directory
 
Now open VS Code, navigate to that respective folder
Add a "db.json" file
Populate this file with the below set of data: -
	{
    "movies":[
        {
            "id": 1,
            "title": "Inception",
            "director": "Christopher Nolan",
            "year": 2010,
            "genre": "Science Fiction"
        },
        {
            "id": 2,
            "title": "The Godfather",
            "director": "Francis Ford Coppola",
            "year": 1972,
            "genre": "Crime"
        },
        {
            "id": 3,
            "title": "Pulp Fiction",
            "director": "Quentin Tarantino",
            "year": 1994,
            "genre": "Crime"
        }
    ]
}

json-server --watch db.json

Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
 
npx json-server --watch db.json