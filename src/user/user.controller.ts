import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Put,
    Query, } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.interface';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    
    @Get()
    getHelloWorld(): string{
        return this.userService.getHelloWorld();
    }

    @Post('/create_user')
    async onCreateUser(@Body() usersData: { id: number; name: string; age: number }[]): Promise<User[]> {
        return this.userService.onCreateUser(usersData);
    }

    @Get('/user_all')
    getUserAll(): User[] {
        return this.userService.getUserAll();
    }

    @Get('/user')
    findByUserOne1(@Query('id') id: number): User {
        return this.userService.findByUserOne(id);
    }

    @Get('/user/:id')
    findByUserOne2(@Param('id') id: number): User {
        return this.userService.findByUserOne(id);
    }

    @Patch('/user/:id')
    setUser(@Param('id') id:number, @Body('name') name: string): User {
        return this.userService.setUser(id, name);
    }

    @Put('/user/update')
    setAllUser(@Body('id') id: number, @Body('name') name: string): User[] {
        return this.userService.setAllUser(id, name);
    }

    @Delete('/delete')
    deleteUser(@Query('id') id: number): User[] {
        return this.userService.deleteUser(id);
    }
}

