// Example TypeScript file to test CodeRabbit review
export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

export class UserService {
  private users: Map<string, User> = new Map();

  async createUser(name: string, email: string): Promise<User> {
    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      createdAt: new Date(),
    };
    
    this.users.set(user.id, user);
    return user;
  }

  async getUserById(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getAllUsers(): Promise<User[]> {
    return Array.from(this.users.values());
  }

  async deleteUser(id: string): Promise<boolean> {
    return this.users.delete(id);
  }
}
