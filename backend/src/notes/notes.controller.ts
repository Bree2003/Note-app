import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { NotesService } from './notes.service';
import { Note } from './note.entity';
import { UpdateNoteDto } from './dto/update-note.dto';

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get()
  findAllNotes(): Promise<Note[]> {
    return this.notesService.getAllNotes();
  }

  @Get(':id')
  getNote(@Param('id', ParseIntPipe) id: number) {
    return this.notesService.getNote(id);
  }

  @Post()
  createNote(
    @Body(new ValidationPipe()) newNote: CreateNoteDto,
  ): Promise<Note> {
    return this.notesService.createNote(newNote);
  }

  @Delete(':id')
  deleteNote(@Param('id', ParseIntPipe) id: number) {
    return this.notesService.deleteNote(id);
  }

  @Patch(':id')
  updateNote(
    @Param('id', ParseIntPipe) id: number,
    @Body() note: UpdateNoteDto,
  ) {
    return this.notesService.updateNote(id, note);
  }
}
