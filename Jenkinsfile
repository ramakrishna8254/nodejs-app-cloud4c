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
    stage('ExecuteSonarQubeReport'){
        nodejs(nodeJSInstallationName: 'nodejs16.19.0'){
        sh "npm run sonar"
    }
    }
    stage('UploadArtifactintoNexus'){
	    sh "npm publish"
    }
    stage('RunNodeJSApp'){
	sh "chmod 775 /var/lib/jenkins/workspace/nodejs-app/node_modules/"
        sh "chmod u+x ./scripts/runApp.sh"
        sh "./scripts/runApp.sh"
    }
}
