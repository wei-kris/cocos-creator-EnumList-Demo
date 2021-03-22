import {TestBase} from "./TestBase"

const { ccclass } = cc._decorator;

export enum Event {
    'B的事件1' = 0,
    'B的事件2' = 1,
    'B的事件3' = 2
};

@ccclass("TestB")
export class TestB extends TestBase{
    public EventKey = cc.Enum(Event);
}
