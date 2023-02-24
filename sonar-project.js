const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://ec2-3-111-42-86.ap-south-1.compute.amazonaws.com:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'nodejs-cloud4c-app',
	    'sonar.projectKey':'nodejs-cloud4c-app',
	    'sonar.login': 'admin',
	    'sonar.password': 'admin',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	    'sonar.exclusions': '**/node_modules/**,/coverage/lcov-report/*,test/*.js',
	    'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
	    //'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
	    //'sonar.exclusions': '**/node_modules/**,/coverage/lcov-report/*.test/*.js',
	    //'sonar.javascript.lcov.reportPaths': './coverage/lcov.info',
	    //'sonar.tests': 'app.js',
            //'sonar.inclusions': '/coverage/lcov-report/*.test/*.js',
       },
}, () => {});
