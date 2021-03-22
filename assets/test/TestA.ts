import {TestBase} from "./TestBase"

const { ccclass } = cc._decorator;

export enum Event {
    'A的事件1' = 0,
    'A的事件2' = 1,
    'A的事件3' = 2
};

@ccclass("TestA")
export class TestA extends TestBase{
    public EventKey = cc.Enum(Event);
}
