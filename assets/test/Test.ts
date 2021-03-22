import {TestBase} from "./TestBase"

let DefaultEventEnum = cc.Enum({ '<None>': 0 });

let setEnumAttr = function(obj, propName, enumDef) {
    cc.Class.Attr.setClassAttr(obj, propName, 'type', 'Enum');
    cc.Class.Attr.setClassAttr(obj, propName, 'enumList', cc.Enum.getList(enumDef));
}

const { ccclass, property} = cc._decorator;

@ccclass("Test")
export default class Test extends cc.Component {
    @property(TestBase)
    _testBase: TestBase = null;

    @property(TestBase)
    get testBase() {
        return this._testBase;
    }

    set testBase(val: TestBase) {
        this._testBase = val;
        setEnumAttr(this, 'EventKey', val.EventKey || DefaultEventEnum);
        Editor.Utils.refreshSelectedInspector('node', this.node.uuid);
    }

    @property({
        type: DefaultEventEnum,
        displayName: '事件'
    })
    public EventKey = DefaultEventEnum["<None>"];
}
