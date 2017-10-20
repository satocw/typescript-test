import * as assert from 'power-assert';

describe('オブジェクト同士の比較', () => {   
    let obj = { "a": "AAA", "b": "bbb" };
    let newObj = obj;

    it('newObj = obj と代入すると２つは同値', () => {
        assert(obj === newObj);
    });

    it('片方のプロパティの値を変更してもまだ等しい', () => {
        newObj.a = "CCC";
        assert(obj === newObj);
    });

    it('片方のプロパティの値を変更するともう片方にも反映される', () => {
        newObj.a = "DDD";
        assert(obj.a === "DDD");
    });

    describe('階層が深い場合は', () => {
        let nestedObj = {
            "a": {
                "b": "BBB"
            }
        };
        let newNestedObj = nestedObj;

        it('片方のプロパティの値を変更するともう片方にも反映される', () => {
            newNestedObj.a.b = "CCC";
            assert(nestedObj.a.b === "CCC");
        });

        it('片方のプロパティが違うオブジェクトを参照しても同じ', () => {
            newNestedObj.a = { "b": "DDD" };
            assert(nestedObj.a.b === "DDD");
            assert(nestedObj === newNestedObj);
            assert(nestedObj.a === newNestedObj.a);
        });

        it('DeepEqual', () => {
            newNestedObj.a = { "b": "EEE" };
            assert.deepEqual(nestedObj, newNestedObj);
        });
    });
});