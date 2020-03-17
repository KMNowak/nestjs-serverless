import { Controller, Get, Param, Post } from "@nestjs/common";
import { Params } from "lib/params";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(`:${Params.Id}`)
  getHello(@Param(Params.Id) id: string): string {
    return this.appService.getHello(id);
  }

  @Post()
  postHello(): string {
    return this.appService.postHello();
  }
}
