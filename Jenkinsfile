node
{
	environment {
    NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
}
    stage('CheckOutcode'){
        git 'https://github.com/ramakrishna8254/nodejs-app-cloud4c.git'
    }
    stage('Build'){
        nodejs(nodeJSInstallationName: 'nodejs16.19.0'){
        sh "npm install"
    }
    }
    stage('Test'){
        nodejs(nodeJSInstallationName: 'nodejs16.19.0'){
        sh "npm test"
	 step([$class: 'JUnitResultArchiver', testResults: 'tests/test-report.xml'])
      step([
        $class: 'CloverPublisher',
        cloverReportDir: 'tests',
        cloverReportFileName: 'coverage-report.xml',
        healthyTarget: [methodCoverage: 67, conditionalCoverage: 75, statementCoverage: 67],
        unhealthyTarget: [methodCoverage: 10, conditionalCoverage: 15, statementCoverage: 10],
        failingTarget: [methodCoverage: 5, conditionalCoverage: 10, statementCoverage: 5]
      ])
    }
    }	
    stage('ExecuteSonarQubeReport'){
        nodejs(nodeJSInstallationName: 'nodejs16.19.0'){
        sh "npm run sonar"
    }
    }
    stage('UploadArtifactintoNexus'){
	    sh "npm publish"
    }
    stage('RunNodeJsApp')
{
sh "sudo killall -9 node"
sh "sudo nohup npm start &"
}

}
