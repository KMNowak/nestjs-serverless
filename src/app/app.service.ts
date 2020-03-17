import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(id?: string): string {
    return `Hello World id: ${id}!`;
  }

  postHello(): string {
    return "Post World!";
  }
}
