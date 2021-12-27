import path from 'path'

export default  {

  development: {
    client: 'pg',
    connection: {
      host : 'postgres_api',
      database: 'cards',
      user:     'postgres',
      password: 'postgres'
    },

    migrations:{
      directory: path.resolve(__dirname, "src", "database", "migrations")
    },
    seeds:{
      directory: path.resolve(__dirname, "src", "database", "seeds")
    },
    useNullAsDefault: true
  }
  
};
