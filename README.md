# The web dev tutorial

A tutorial; it was see by me, on a blog 

## Tecnologies

The tecnologies implemented on this project are:

- Express.js
- Handlebars
- Node.js
- MongoDB
- Javascript
- Bootstrap 5

## Setting up

### Downloading

Run the next commands:

```sh
cd $HOME
mkdir repo
cd repo
git clone https://github.com/AlphaTechnolog/Web-dev-tutorial.git webdev
```

### Installing dependencies

Use `npm` or `yarn` (I love yarn):

```sh
cd ~/repo/webdev
yarn # or npm install
```

### Creating the mongodb database

To create the mongodb database, use the next guide.

#### Starting the daemon

If you didn't are running the `mongod` daemon on your system,
you will'e run as this on your terminal:

```sh
sudo mongod
```

It init the `mongod` daemon, other method is via `systemctl`:

```sh
sudo systemctl start mongodb # Please wait...
```

#### Interacting with mongodb

Open `mongo`:

```sh
mongo
```

In the interactive prompt, type this:

```js
use webdev # or anyone database name
const collections = ['users', 'todos'];
collections.forEach((collection) => {
  db.createCollection(collection);
});
```

Collections and database (named: `webdev`) are created!

### .env

The .env file define the constants for the application, exists a sample
for the .env file, it file (`sample.env`) show for you all app constants
without the values, the values are writed by you. Type this commands:

```sh
cd repo/webdev
cp -r ./sample.env ./.env
```

Now edit it:

```sh
vim .env
```

```sh
# Define the port of the app, default: 8000
APP_PORT=8000

# Define the secret to generate tokens, sessions,
# and others.
APP_SECRET=secret

# Define the Mongo DB database address
# the mongodb atlas uri's, are valid.
MONGO_URI=mongodb://HOST:PORT/DBNAME
```

Where to configure your localhost, HOST is `localhost`,
PORT is `27017` and `DBNAME` is the database name (in my case: `webdev`),
complete `MONGO_URI` = `mongodb://localhost:27017/webdev`.

## Getting started

### Starting without hot reloading (only for use)

To start without hot reloading (nodemon), use this commands:

```sh
cd $HOME/repo/webdev
yarn start # or npm run start / npm start
```

### Starting with the hot reloading (for development)

To start with hot reloading (nodemon), use this commands:

```sh
cd $HOME/repo/webdev
yarn dev # or npm run dev
```

### Go to app

Open your preferred browser, and type this: `http://localhost:8000`. Enjoy
with my exercise!.

# Enjoy

Thanks for README! :)
