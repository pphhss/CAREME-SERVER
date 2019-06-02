const assert = require('assert');

describe.only("saveMessage Test", function () {
    var message = require('../../model/chat/message');
    it("insert chat table test", function (done) {
        message.saveMessage(
            {
                type: "0",
                sender: "1",
                receiver: "1",
                message: "message"
            }
            , function () { }, function (_idx) {
                assert(_idx);
                done();
            });
    });
});