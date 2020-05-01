'use strict';

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const { App } = require('jovo-framework');
const { Alexa } = require('jovo-platform-alexa');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { JovoDebugger } = require('jovo-plugin-debugger');
const { FileDb } = require('jovo-db-filedb');
const  jsforce = require('jsforce');
const app = new App();

const USER_NAME = '<YOUR SALESFORCE USERNAME>';
const PASSWORD = '<YOUR SALESFORCE PASSWORD><YOUR SECURITY TOKEN>';

app.use(
    new Alexa(),
    new GoogleAssistant(),
    new JovoDebugger(),
    new FileDb()
);

app.setHandler({
    LAUNCH() {
        return this.toIntent('HelpIntent');
    },
    HelpIntent() {
        this.ask('How May I Help You?');
    },
    async GetPhoneNumberOfAccountIntent() {
        var conn = new jsforce.Connection();
        await conn.login(USER_NAME, PASSWORD);
        const result = await conn.query("SELECT Id, Name, Phone FROM Account WHERE Name LIKE \'%" + this.$inputs.name.value + "%\'");
        this.tell(result.records[0].Phone);
    },
    Unhandled() {
        
    },
    END() {
        
    }
});

module.exports.app = app;
