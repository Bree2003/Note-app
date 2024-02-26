import { Module } from '@nestjs/common';
import { NotesModule } from './notes/notes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from './notes/note.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'notes_ensolvers',
      entities: [Note],
      synchronize: true,
    }),
    NotesModule,
  ],
})
export class AppModule {}
