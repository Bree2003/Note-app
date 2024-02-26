import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from './note.entity';
import { Repository } from 'typeorm';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note) private noteRepository: Repository<Note>,
  ) {}

  createNote(note: CreateNoteDto) {
    const newNote = this.noteRepository.create(note);
    return this.noteRepository.save(newNote);
  }

  getAllNotes() {
    return this.noteRepository.find();
  }

  async getNote(id: number) {
    const noteFound = await this.noteRepository.findOne({
      where: {
        id,
      },
    });
    if (!noteFound) {
      throw new HttpException('Note not found', HttpStatus.NOT_FOUND);
    }
    return noteFound;
  }

  async deleteNote(id: number) {
    const result = await this.noteRepository.delete({ id });
    if (result.affected === 0) {
      throw new HttpException('Note not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }

  async updateNote(id: number, note: UpdateNoteDto) {
    const noteFound = await this.noteRepository.findOne({
      where: {
        id,
      },
    });
    if (!noteFound) {
      throw new HttpException('Note not found', HttpStatus.NOT_FOUND);
    }
    const updateNote = Object.assign(noteFound, note);

    return this.noteRepository.save(updateNote);
  }
}
