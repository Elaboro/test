import { Injectable } from "@nestjs/common";

export type ActionTypeList = "start" | "connect" | "message" | "end";

@Injectable()
export class FirstBackTask {
  static getResult(actions: ActionTypeList[]): number {

    if(actions.length <= 3 || actions.length >= 50) {
      throw new Error("Нарушины условия задачи. От 3 до 50.");
    }

    let result = 0;

    const success = ["start", "connect", "message", "end"];

    actions.forEach((v, i, a) => {
      if(v = "start") {
        if(i + 1 === undefined || i + 4 === undefined) return;

        const condition = a.slice(i, i + 4);
        const status = success.every((v, i) => v === condition[i]);
        if(!status) return;

        result++;
      } else {
        return;
      }
    });
    
    return result;
  }
}
