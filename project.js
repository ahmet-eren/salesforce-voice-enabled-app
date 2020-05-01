// ------------------------------------------------------------------
// JOVO PROJECT CONFIGURATION
// ------------------------------------------------------------------

module.exports = {
    alexaSkill: {
       nlu: 'alexa',
    },
    googleAction: {
      nlu: 'dialogflow',
      dialogflow: {
        projectId: 'test-vphkki',
        keyFile: './test-vphkki-2ac2a8c8bc04.json'
      }
    },
    endpoint: '${JOVO_WEBHOOK_URL}',
    stages: {
      dev: {
        endpoint: 'https://salesforce-jovo.herokuapp.com/webhook/',
      },
      prod: {
        endpoint: 'https://salesforce-jovo.herokuapp.com/webhook/',
      },
    },
};
 