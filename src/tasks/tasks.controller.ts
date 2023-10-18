import { Controller, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private TasksService: TasksService) {}

    @Post('verifyCrunchyroll')
    async verifyCrunchyroll(
        @Body('email') email: string,
        @Body('password') password: string,
    ): Promise<{ [key: string]: number }> {
        return await this.TasksService.verifyCrunchyrollCredentials(email, password);
    }

    // ... (rest of the existing methods)
}
