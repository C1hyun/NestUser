import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UserService {
    private users: User[] = [];

    onCreateUser(userData: {id: number, name: string, age: number}[]): User[] {
        userData.forEach(userData => {
            const { id, name, age } = userData;
            const newUser = { id, name, age };
            this.users.push(newUser);
            console.log(`유저 생성: ${name} (ID: ${id}, Age: ${age})`);
        });
        return this.users
    }

    getUserAll(): User[] {
        return this.users;
    }

    findByUserOne(id: number): User {
        return this.users.find((data) => data.id == id);
    }

    setUser(id: number, name: string): User {
        const user = this.users.find((data) => data.id == id);
        if (user) {
            user.name = name;
        }
        return user;
    }

    setAllUser(id, name): User[] {
        return this.users.map((data) => {
            if (data.id == id) {
                data.name = name;
            }
            return data;
        });
    }

    deleteUser(id: number): User[] {
        const userToDelete = this.users.find((data) => data.id == id);
        if (!userToDelete) {
            console.log(`유저 ID ${id}가 존재 하지 않음`);
            return this.users;
        }
        this.users = this.users.filter((data) => data.id != id);
        console.log(`유저 ID ${id} (${userToDelete.name})가 삭제됨`);
        return this.users;
    }
    
    getHelloWorld(): string{
        return '박시현';
    }
}
