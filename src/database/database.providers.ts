import { ConfigService } from '../config/config.service.js';
import { DataSource } from 'typeorm';
import { User } from '../modules/users/entities/user.entity.js';
import { Categoria } from '../modules/categoria/entities/categoria.entity.js';

export const databaseProvider = [
  {
    provide: 'DATABASE_CONNECTION_POSTGRES',
    inject: [ConfigService],
    useFactory: (config: ConfigService) => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: config.get('HOST') || 'localhost',
        port: +config.get('PORT_DB'),
        username: config.get('USERNAME') || 'root',
        password: config.get('PASSWORD') || 'prueba',
        database: config.get('DATABASE'),
        entities: [User, Categoria],
      });

      return dataSource.initialize();
    },
  },
];